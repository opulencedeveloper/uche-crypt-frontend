"use client";

import { useState } from "react";
import GeneralSettings from "./general-settings";
import CourseSettings from "./course-settings";
import ReferralProgramSettings from "./referral-program-settings";
import SubAdminManagementSettings from "./sub-admin-management-settings";

const settingsTabs: string[] = [
  "General",
  "Course",
  "Referral program",
  "Sub - Admin",
];

export default function AdminSettingssBody() {
  const [selectedTab, setSelectedTab] = useState(settingsTabs[0]);

  const renderSelectedTab = () => {
    switch (selectedTab) {
      case "General":
        return <GeneralSettings />;
      case "Course":
        return <CourseSettings />;
      case "Referral program":
        return <ReferralProgramSettings />;
      case "Sub - Admin":
        return <SubAdminManagementSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-5 pl-4 pr-5 w-full">
      <div className="flex gap-x-4 mb-22p">
        {settingsTabs.map((tabVal) => (
          <button
            key={tabVal}
            onClick={() => setSelectedTab(tabVal)}
            className={`flex items-center h-37p rounded-3xl px-5 ${
              tabVal === selectedTab ? "bg-cF0FDF7" : "bg-cF6F6F6A8"
            }`}
          >
            <span
              className={`font-geist500 text-sm ${
                tabVal === selectedTab ? "text-primarygreen1" : "text-black"
              }`}
            >
              {tabVal}
            </span>
          </button>
        ))}
      </div>

      <div className="py-4 px-6 border border-e5e5e5 rounded-2xl">
        {renderSelectedTab()}
      </div>
    </div>
  );
}
