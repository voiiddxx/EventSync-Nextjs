import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:[
      "/",
      "events/create",
      "/api/webhook/clerk"
    ],
    ignoredRoutes:[
      "/api/webhook/clerk"
    ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};