import Post from "../schema/postSchema";
import {client} from "../lib/mongodb";
import { NextResponse } from "next/server";
import { UserVerify } from "../lib/UserVerify";

export async function GET() {
    try {
        await client();
        const decodedToken = await UserVerify();
        if (!decodedToken) {
            return NextResponse.json({ message: "Unauthorized" });
        }
        const posts = await Post.find({ user: decodedToken?._id });
        return NextResponse.json({ posts });
    } catch (error) {
        console.log(error);
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {post} = body
        await client();
        // is user exist 
        const decodedToken = await UserVerify();
        if (!decodedToken) {
            return NextResponse.json({ message: "Unauthorized" });
        }
        const createPost = await Post.create({
            user: decodedToken?._id,
            postdata: post
        });
        return NextResponse.json({ message: "Post created successfully", result: createPost });
    } catch (error) {
        console.log(error);
    }
}