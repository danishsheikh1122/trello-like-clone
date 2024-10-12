import React from "react";
import { NavBar } from "./_components/navbar";
import { Footer } from "./_components/footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100 h-full">
      <NavBar></NavBar>
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default MarketingLayout;
