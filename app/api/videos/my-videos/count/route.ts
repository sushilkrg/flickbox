import { authOptions } from "@/lib/auth";
import Video from "@/models/Video";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    const videosCount = await Video.countDocuments({ user: userId });
    const publicCount = await Video.countDocuments({
      user: userId,
      visibility: "public",
    });
    const privateCount = await Video.countDocuments({
      user: userId,
      visibility: "private",
    });

    if (!videosCount || videosCount === 0) {
      return NextResponse.json(
        { message: "No videos available" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        total: videosCount,
        public: publicCount,
        private: privateCount,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
