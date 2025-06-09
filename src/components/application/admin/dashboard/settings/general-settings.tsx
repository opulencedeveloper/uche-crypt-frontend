"use client";

import { useState } from "react";
import TitleToggleButton from "../ui/titled-toggle-button";

export default function GeneralSettings() {
  const [enableRegistration, setEnableRegistration] = useState(false);

  return (
    <form>
      <p className="text-black font-geist700 text-22p">General</p>
      <p className="text-base font-geist500 text-c828282">
        Configure basic platform settings
      </p>
      <div className="mb-6 max-w-[311px] mt-4">
        <label htmlFor="email" className="text-sm font-geist500 text-dark1">
          Support Email
        </label>
        <input
          placeholder="Enter email"
          required
          type="email"
          id="email"
          className="w-full h-12 mt-2 px-4 border border-e5e5e5 rounded-xl text-sm placeholder:text-sm outline-none  "
        />
      </div>

<div className="flex flex-col space-y-6">
      <TitleToggleButton
        title="Enable registration"
        subTitle="Allow new user to register on this platform"
        onToggle={setEnableRegistration}
        enabled={enableRegistration}
      />
       <TitleToggleButton
        title="Maintenance mode"
        subTitle="Put the site in maintenance mode. Only administrators will be able to access the site."
        onToggle={setEnableRegistration}
        enabled={enableRegistration}
      />
      </div>
      <button className="flex items-center mt-4 text-sm font-geistRegular text-white h-37p px-3 bg-primarygreen1 rounded-xl">Save settings</button>
    </form>
  );
}
