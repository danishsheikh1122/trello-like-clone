import { OrganizationSwitcher } from "@clerk/nextjs";
import React from "react";

const OrgPage = () => {
  return (
    <div>
      <OrganizationSwitcher hidePersonal></OrganizationSwitcher>
    </div>
  );
};

export default OrgPage;
