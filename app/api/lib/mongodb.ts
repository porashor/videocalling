// import { MongoClient } from "mongodb";
import mongoose from "mongoose";


const uri = process.env.MONGODB_URI as string;

export async function client() {
    await mongoose.connect(uri!);
}


export default client

