"use client";

import { useState } from "react";
import TitleToggleButton from "../ui/titled-toggle-button";

export default function ReferralProgramSettings() {
  const [enableReferralProgram, setEnableReferralProgram] = useState(false);
  const [requirePurchaseApproval, setRequirePurchaseApproval] = useState(false);

  return (
    <form>
      <p className="text-black font-geist700 text-22p">
        Referral Program Settings
      </p>
      <p className="text-base font-geist500 text-c828282">
        Configure the global settings for your referral program
      </p>
      <div className="flex flex-col space-y-6 mb-6 mt-4">
        <TitleToggleButton
          title="Enable Referral Program"
          subTitle="Turn the referral program on or off globally"
          onToggle={setEnableReferralProgram}
          enabled={enableReferralProgram}
        />

        <div>
          <label
            htmlFor="def-ref-per"
            className="text-sm font-geist500 text-dark1"
          >
            Default Referral Percentage
          </label>
          <input
            placeholder="Enter default referral percentage"
            required
            type="number"
            id="def-ref-per"
            className="w-full h-12 mt-2 px-4 border border-e5e5e5 rounded-xl text-sm placeholder:text-sm outline-none  "
          />
          <p className="mt-2 text-c828282 font-geistRegular text-sm">
            Turn the referral program on or off globally
          </p>
        </div>
        <div className="flex space-x-6 ">
          <div className="flex-1">
            <label
              htmlFor="min-percentage"
              className="text-sm font-geist500 text-dark1"
            >
              Minimum Percentage
            </label>
            <input
              placeholder="Enter minimum percentage"
              required
              type="number"
              id="min-percentage"
              className="w-full h-12 mt-2 px-4 border border-e5e5e5 rounded-xl text-sm placeholder:text-sm outline-none  "
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="max-percentage"
              className="text-sm font-geist500 text-dark1"
            >
              Maximum Percentage
            </label>
            <input
              placeholder="Enter course price"
              required
              type="number"
              id="max-percentage"
              className="w-full h-12 mt-2 px-4 border border-e5e5e5 rounded-xl text-sm placeholder:text-sm outline-none  "
            />
          </div>
        </div>

         <TitleToggleButton
          title="Require Purchase Approval"
          subTitle="Require admin approval for course purchases before granting access"
          onToggle={setRequirePurchaseApproval}
          enabled={requirePurchaseApproval}
        />
      </div>

      <button className="flex items-center mt-4 text-sm font-geistRegular text-white h-37p px-3 bg-primarygreen1 rounded-xl">
        Save settings
      </button>
    </form>
  );
}
