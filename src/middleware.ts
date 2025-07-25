import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/", "/original", "/new"],
};

export function middleware(request: NextRequest) {
  console.log(`Middleware called for route: ${request.nextUrl.pathname}`);
}
