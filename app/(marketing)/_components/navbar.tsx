import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm flex items-center bg-white">
      <div className="md:max-w-screen-2xl mx-auto flex items-center  w-full justify-between">
        <Logo></Logo>
        <div className="space-x-4 md:w-auto md:block  items-center justify-between w-full flex ">
          <Button size={"sm"} variant={"outline"} asChild>
            <Link href="/sign-in">Login</Link>
          </Button>

          <Button asChild size={"sm"}>
            <Link href="/sign-up">Get Taskify For Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
