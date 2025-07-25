import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/", "/original", "/new"],
};

export function middleware(request: NextRequest) {
  console.log(
    `Middleware Invoked: URL: ${request.url}. Next URL: ${request.nextUrl}`,
  );
}
