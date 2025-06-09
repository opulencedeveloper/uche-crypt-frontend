"use client";

import { TitledToggleButtonProps } from "@/types/global";
import ToggleSwitch from "./toggle-switch";

export default function TitleToggleButton({title, subTitle, onToggle, enabled} : TitledToggleButtonProps) {

  
  return (
    <div className="flex justify-between items-center">
        <div className="text-sm">
            <span className="text-black font-geist500 mb-2 block">{title}</span>
            <span className="text-c828282 font-geistRegular">{subTitle}</span>
        </div>
     <ToggleSwitch enabled={enabled} onToggle={onToggle} />
    </div>
  );
}
