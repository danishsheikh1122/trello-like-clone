import React from "react";
import { DashboardNavBar } from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <DashboardNavBar></DashboardNavBar>
      {children}
    </div>
  );
};

export default DashboardLayout;
