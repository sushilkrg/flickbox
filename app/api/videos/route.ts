import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import Video from "@/models/Video";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  try {
    await connectToDatabase();
    const { title, description, visibility, videoUrl } = await req.json();

    if (!title || !videoUrl) {
      return NextResponse.json(
        { error: "Title and videoUrl are required" },
        { status: 400 }
      );
    }

    const newVideo = await Video.create({
      title,
      description,
      visibility,
      videoUrl,
      thumbnailUrl: `${videoUrl}/ik-thumbnail.jpg`,
      user: session?.user.id,
    });

    return NextResponse.json({ success: true, video: newVideo });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    // const videos = await Video.find({ visibility: "public" })
    //   .sort({ createdAt: -1 })
    //   .lean();
    const { searchParams } = new URL(req.url);
    const searchQuery = searchParams.get("searchQuery");

    let query: Record<string, any> = { visibility: "public" };

    if (searchQuery) {
      query = {
        ...query,
        $or: [
          { title: { $regex: searchQuery, $options: "i" } },
          { description: { $regex: searchQuery, $options: "i" } },
        ],
      };
    }

    const videos = await Video.find(query).sort({ createdAt: -1 }).lean();

    if (!videos || videos.length === 0) {
      return NextResponse.json([], { status: 200 });
    }
    return NextResponse.json(videos, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
