import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        await connectDB();
        const posts = await Post.find();
        return new NextResponse(JSON.stringify(posts) , {status:200});
    }
     catch (error) {
        console.log(error);
        return new NextResponse('Database Error',{status:500});
    }
}