import { ToggleSwitchProps } from "@/types/global";

export default function ToggleSwitch({ enabled, onToggle }: ToggleSwitchProps) {
  return (
    <div
      onClick={() => onToggle(!enabled)}
      className={`w-[51px] h-[31px] flex items-center rounded-full px-[3px] cursor-pointer transition-colors duration-300 ${
        enabled ? "bg-c080808" : "bg-c78788029"
      }`}
    >
      <div
        className={`bg-white w-[25px] h-[25px] rounded-full shadow-md transform transition-transform duration-300 ${
          enabled ? "translate-x-[20px]" : "translate-x-0"
        }`}
      />
    </div>
  );
}
