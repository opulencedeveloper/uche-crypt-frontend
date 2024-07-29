"use client";
import { useAuth } from "@/hooks/auth";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Image from "next/image";
import AuthFormInput from "../auth-form-input";

import RollingSpinner from "@/assets/images/home/rolling-spinner.svg";

export default function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { resetPassword, notifyUser } = useAuth();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      notifyUser("error", "Password must match with confirm password", "right");
      return;
    }

    resetPassword({
      email: email || "",
      otp: token || "",
      password: newPassword,
      confirm_password: confirmPassword,
      setLoading,
      router,
    });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
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
        {loading ? (
          <Image src={RollingSpinner} alt="" className=" h-7 w-max" />
        ) : (
          " Continue"
        )}
      </button>
    </form>
  );
}
