import bcrypt from "bcryptjs";
import client from "../lib/mongodb";
import UserModel from "../schema/userSchema";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
const secret = process.env.JWT_SECRET as string;
export const runtime = "nodejs";

interface MyJwtPayload extends JwtPayload { _id: string; }



export async function GET() {
    const headersCookie = cookies()
    try {
    const token = (await headersCookie).get("auth_token")?.value
    await client();
    console.log("Token from cookies:", token);
    if(!token){
        return NextResponse.json({ user: null , AthTkn : token });
    }
    const decodedToken = jwt.verify(token as string, secret) as MyJwtPayload;
    console.log("Decoded Token:", decodedToken);
    const user = await UserModel.findOne({ _id: decodedToken._id });
    return NextResponse.json({ user });
  } catch (err) {
    console.error("GET /api/registery error:", err);
    
  }
}





export async function POST(req: Request) {
  try {
    await client();
    const body = await req.json();
    const { name, email, password } = body;
    // empty check
    if (!name || !email || !password) {
      return Response.json({
        status: 400,
        data: { message: "All fields are required" },
      });
    }
    // password length check
    if (password.length < 6) {
      return Response.json({
        status: 400,
        data: { message: "Password must be at least 6 characters" },
      });
    }
    // user exist check
    const userexist = await UserModel.findOne({ email });
    if (userexist) {
      return Response.json({
        status: 400,
        data: { message: "User already exists" },
      });
    }
    // password hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    // user creating
    const reses = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });
    // user create check
    if (!reses) {
      return Response.json({
        status: 400,
        data: { message: "User not created" },
      });
    }
    // token create
    const token = jwt.sign({ _id: reses._id }, secret);
    // token set in cookie

    const cook = NextResponse.json({
      success: true,
      status: 200,
      data: { message: "register successfully done", token: token },
    });
    if (token) {
      cook.cookies.set("auth_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 60 * 60 * 24 * 30,
      });
    }
    return cook;
  } catch (error) {
    console.log(error);
  }
}






export async function DELETE() {
  try {
    const res = NextResponse.json({
      status: 200,
      message: "Sign out successfully",
      success: false,
    });
    res.cookies.delete("auth_token");
    return res;
  } catch (error) {
    console.log(error);
  }
}
