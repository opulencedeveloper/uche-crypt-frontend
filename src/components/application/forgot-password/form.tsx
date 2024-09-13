"use client";
import { useState } from "react";
import { useAuth } from "@/hooks/auth";

import Image from "next/image";

import AuthFormInput from "../auth-form-input";
import RollingSpinner from "@/assets/images/home/rolling-spinner.svg";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [linkSent, setLinkSent] = useState(false);

  const [loading, setLoading] = useState(false);

  const { forgotPassword } = useAuth();

  const makeRequest = () => {
    forgotPassword({
      email,
      setLoading,
      handleSuccess: linkSent ? undefined : () => setLinkSent(true),
    });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    makeRequest();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className={` max-w-full h-max rounded-xl bg-white px-5 sm:px-8 flex flex-col ${
        linkSent ? "w-[455px] py-6" : "w-[375px] py-[18px]"
      }`}
    >
      <div className="flex mb-3 mini:mb-[23px] items-center gap-1">
        <h3
          className={`text-dark1 w-full font-bold text-[13px] mini:text-xl sm:text-[22px] leading-6 mini:leading-[33px] ${
            linkSent ? "text-center" : "text-start"
          }`}
        >
          {linkSent ? "Reset your password" : " Reset password"}
        </h3>
      </div>
      {linkSent ? (
        <div className="text-[#6B7588] font-normal leading-3 mini:leading-6 text-[13px] mini:text-base text-center">
          We’ve sent an email to {email}. <br />
          Click the link in the email to reset your password. <br /> If you
          don’t see the email,{" "}
          <button className="text-[#004FC4]" onClick={makeRequest}>
            click here
          </button>{" "}
          and we’ll send it again.
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col gap-3 mb-3 mini:mb-[23px]">
            <AuthFormInput
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              type="email"
              value={email}
            />
          </div>
          <button
            type="submit"
            className="w-full h-11 mini:h-12 rounded-xl text-white font-medium text-[9px] mini:text-base flex justify-center items-center bg-primarygreen1"
          >
            {loading ? (
              <Image src={RollingSpinner} alt="" className=" h-7 w-max" />
            ) : (
              "Send reset password link"
            )}
          </button>
        </>
      )}
    </form>
  );
}
