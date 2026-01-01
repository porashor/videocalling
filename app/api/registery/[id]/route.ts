import { NextResponse } from "next/server"; 
import UserModel from '@/app/api/schema/userSchema'
import {client} from "@/app/api/lib/mongodb";



export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = await params;
        await client();
        const posts = await UserModel.find({ _id: id });
        const {_id, name, profilePic} = posts[0]
        const sendableData = {_id, name, profilePic}
        console.log("posts", sendableData);
        return NextResponse.json({ sendableData });
    } catch (error) {
        console.log(error);
    }
}