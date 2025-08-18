import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware() {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized({ req, token }) {
        const { pathname } = req.nextUrl;

        if (
          pathname.startsWith("/api/auth") ||
          pathname === "/login" ||
          pathname === "/register" ||
          pathname === "/videos" ||
          pathname === "/"

          // remove few later
          // pathname === "/feed" ||
          // pathname === "/dashboard" ||
          // pathname === "/upload" ||
          // pathname.startsWith("/edit") ||
          // pathname.startsWith("/details") ||
          // pathname.startsWith("/api/videos")
        ) {
          return true;
        }

        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|webp|svg|mp4|webm|ogg)$).*)",
  ],
};
