"use client";
import { useState } from "react";

import Image from "next/image";
import Eye from "@/assets/images/auth-layout/eye.svg";
import EyeSlash from "@/assets/images/auth-layout/at-sign.svg";

interface FormInputProps {
  label: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthFormInput: React.FC<FormInputProps> = ({
  label,
  value,
  type,
  placeholder,
  onChange,
}) => {
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordType = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <div className="w-full flex flex-col gap-1 mini:gap-1.5">
      <p className="mini:text-sm text-[11px] font-medium leading-3 mini:leading-[21px] text-dark1">
        {label}
      </p>
      <div className={`w-full relative flex items-center h-11 mini:h-[53px]`}>
        <input
          className={`w-full h-full auth-input rounded-xl bg-white outline-none py-[9px] placeholder:text-[#828282] text-[11px] mini:text-sm font-normal text-[#828282] ${
            type === "password" ? "px-4" : "pl-4 pr-[52px]"
          }`}
          placeholder={placeholder}
          value={value}
          type={type === "password" ? passwordType : type}
          onChange={onChange}
          required
        />
        {type === "password" && (
          <button
            onClick={togglePasswordType}
            type="button"
            className="w-[52px] h-full absolute items-center right-0 flex justify-center"
          >
            {passwordType === "password" ? (
              <Image src={EyeSlash} alt="" />
            ) : (
              <Image src={Eye} alt="" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthFormInput;
