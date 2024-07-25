"use client";
import { useState } from "react";

import AuthFormInput from "../auth-form-input";

export default function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form
      className={` h-max rounded-xl bg-white  px-8 flex flex-col w-[375px] py-[18px]`}
    >
      <div className="flex mb-[23px] items-center gap-1">
        <h3
          className={`text-dark1 w-full font-bold text-[22px] leading-[33px] `}
        >
          Create password
        </h3>
      </div>

      <div className="w-full flex flex-col gap-3 mb-[23px]">
        <AuthFormInput
          label="New Password"
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Type your password"
          type="password"
          value={newPassword}
        />
        <AuthFormInput
          label="Confirm new Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Type your password"
          type="password"
          value={confirmPassword}
        />
      </div>
      <button
        type="submit"
        className="w-full h-12 rounded-xl text-white font-medium text-base flex justify-center items-center bg-primarygreen1"
      >
        Continue
      </button>
    </form>
  );
}
