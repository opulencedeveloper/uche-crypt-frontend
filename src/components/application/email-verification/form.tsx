"use client";
import Link from "next/link";
import Image from "next/image";

import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Cookies from "js-cookie";
import ResendOTP from "./resend-otp";
import OTPInput from "./input-otp";

import Spinner from "@/assets/images/auth-layout/spinner.svg";

export default function EmailVerificationForm() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const { verifyEmail } = useAuth();
  const router = useRouter();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (otp.length === 4) {
      verifyEmail({ setLoading, otp, router, email, setError });
    }
    setError(false);
  }, [otp]);

  useEffect(() => {
    const accountEmail = Cookies.get("account-email") || "";
    setEmail(accountEmail);
  }, []);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-[375px] max-w-full h-max rounded-xl bg-white py-[24px] px-5 sm:px-8 flex flex-col"
    >
      <div className="flex mb-1 items-center gap-1">
        <h3 className="text-dark1 font-bold text-xl sm:text-[22px] leading-[33px]">
          Verify your Email
        </h3>
      </div>
      <p className="text-[#6B7588] font-normal text-sm mb-[23px]">
        Please enter the 4 digit OTP code sent to your mail &#40;{email}
        &#41;
      </p>
      <p className="text-sm text-[#171717] font-medium mb-2">OTP Code</p>
      <OTPInput
        length={4}
        loading={loading}
        onChange={(value: string) => setOtp(value)}
        styles={{
          filled: error
            ? "border-[#E53535] bg-[#FFF3F3] text-[#E53535]"
            : "border-[#006633] bg-[#E6FFF2] text-[#006633]",
        }}
      />
      <ResendOTP email={email} setLoading={setLoading} />
      <div className="w-full  flex justify-center">
        <Image
          className={`animate-spin mt-4 ${loading ? "block" : "hidden"}`}
          width={24}
          height={24}
          alt=""
          src={Spinner}
        />
      </div>
    </form>
  );
}
