import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn("flex items-center justify-center flex-col")}>
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 bg text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2"></Medal>
          No 1 task Management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2  rounded-md w-fit pb-4">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs  md:max-w-2xl text-center mx-auto ",
          textFont.className
        )}
      >
        Collaborate,manage projects, and reach new productivity peaks. From high
        rises to the home office, the way your team works is unique—accomplish
        it all with Taskify.
      </div>
      <Button className="mt-6" asChild>
        <Link href={""}>Get Taskify Now</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
