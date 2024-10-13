import { RedirectToSignIn } from "@clerk/nextjs";
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
export default clerkMiddleware({
  publicRoutes: ["/", "/api/webhook"],
  afterAuth(
    auth: {
      userId: string | null;
      orgId: string | null;
      isPublicRoute: boolean;
    },
    req: { nextUrl: { pathname: string; url: string } }
  ) {
    const { userId, orgId, isPublicRoute } = auth;
    const { pathname, url } = req.nextUrl;

    if (userId && isPublicRoute) {
      let path = "/select-org";
      if (orgId) {
        path = `/organization/${orgId}`;
      }
      const orgSelectionUrl = new URL(path, url);
      return NextResponse.redirect(orgSelectionUrl);
    }

    if (!userId && !isPublicRoute) {
      return RedirectToSignIn({ redirectUrl: url });
    }

    if (userId && !orgId && pathname !== "/select-org") {
      return NextResponse.redirect(new URL("/select-org", url));
    }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
