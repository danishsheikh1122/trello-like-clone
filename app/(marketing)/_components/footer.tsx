import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import React from "react";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center  w-full justify-between">
        <Logo></Logo>
        <div className="space-x-4 md:w-auto md:block  items-center justify-between w-full flex ">
          <Button size={"sm"} variant={"ghost"}>
            Privacy Policy
          </Button>
          <Button variant={"ghost"}>Terms of  Service</Button>
        </div>
      </div>
    </div>
  );
};
