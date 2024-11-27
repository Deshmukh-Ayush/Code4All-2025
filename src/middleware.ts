import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


const isPublicRoute = createRouteMatcher([
    "/",
    "/sign-in",
    "/sign-up",
    "/about",
    "/contact",
    "/team"
])

const isProtectedRoute = createRouteMatcher([
    "/events(.*)",
    "/contest(.*)",
    "/blogs(.*)",
])

export default clerkMiddleware(async (auth, req) => {
    const {userId} = await auth();
    const currentUrl = new URL(req.url);
    const isHomePage = currentUrl.pathname === "/";

    // if user is logged in accessing a public route but not the home page
    if(userId && isPublicRoute(req) && !isHomePage ) {
        return NextResponse.redirect(new URL("/", req.url))
    }

    // not logged in
    if(!userId) {
        // if user is not logged and trying to access a protected route
        if(!isPublicRoute(req)){
            return NextResponse.redirect(new URL("/sign-in", req.url))
        }

        if (isProtectedRoute(req)) {
            await auth.protect();
        }
        return NextResponse.next()
    }

});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};