import bcrypt from "bcryptjs";
import client from "../lib/mongodb";
import UserModel from "../schema/userSchema";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";

export const runtime = 'nodejs';
const secret = process.env.JWT_SECRET as string

export async function POST(req: Request) {
    try {
        await client()
        const body = await req.json();
        const {email, password} = body;
        // empty check 
        if(!email || !password) {
            return NextResponse.json({status: 400, data: {message: "All fields are required"}});
        }
        // user exist check 
        const userexist = await UserModel.findOne({email});
        if(!userexist) {
            return NextResponse.json({status: 400, data: {message: "User not found"}});
        }
        // password check 
        const isMatch = await bcrypt.compare(password, userexist.password);
        if(!isMatch) {
            return NextResponse.json({status: 400, data: {message: "Invalid credentials"}});
        }
        // token create 
        const token = jwt.sign({_id: userexist._id}, secret)
        const cook = NextResponse.json({success: true, status: 200, data: {message: "login successfully done", token: token}});
        if(token){
            cook.cookies.set("auth_token", token, {httpOnly: true, secure: true, sameSite: "none", maxAge: 60 * 60 * 24 * 30});
        }
        return cook;
    } catch (error) {
        console.log(error);
    }
}