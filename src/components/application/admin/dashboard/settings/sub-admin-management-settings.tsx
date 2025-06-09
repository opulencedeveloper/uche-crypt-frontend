"use client";

import { useState } from "react";
import TitleToggleButton from "../ui/titled-toggle-button";
import SubAdminManagementTable from "./sub-admin-management-table";

export default function SubAdminManagementSettings() {
  const [enableReferralProgram, setEnableReferralProgram] = useState(false);
  const [requirePurchaseApproval, setRequirePurchaseApproval] = useState(false);

  return (
    <div>
      <p className="text-black font-geist700 text-22p">
       Sub-Admin Management
      </p>
      <p className="text-base font-geist500 text-c828282">
       Manage sub-admin accounts and their permissions
      </p>
      <div className=" mb-6 mt-4">
      <SubAdminManagementTable />
      </div>

    </div>
  );
}
