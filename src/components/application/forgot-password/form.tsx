"use client";
import { useState } from "react";

import AuthFormInput from "../auth-form-input";

import Image from "next/image";
import VerifyImage from "@/assets/images/auth-layout/verify.png";

import { toast } from "react-toastify";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [linkSent, setLinkSent] = useState(false);

  const submit = () => {
    toast.success("Password successfully created", {
      position: "top-right",
      style: {
        backgroundColor: "#F2F2F2",
        borderRadius: "12px",
        padding: "12px, 16px, 12px, 16px",
        gap: "4px",
        color: "#006633",
        fontWeight: "400",
        fontSize: "14px",
        boxShadow: "none",
        fontFamily: "CarosSoftNormal",
      },
      autoClose: 3000,
      closeButton: false,
      hideProgressBar: true,
      icon: <Image src={VerifyImage} width={24} height={24} alt="" />,
    });
  };

  return (
    <form
      className={` max-w-full h-max rounded-xl bg-white  px-8 flex flex-col ${
        linkSent ? "w-[455px] py-6" : "w-[375px] py-[18px]"
      }`}
    >
      <div className="flex mb-[23px] items-center gap-1">
        <h3
          className={`text-dark1 w-full font-bold text-[22px] leading-[33px] ${
            linkSent ? "text-center" : "text-start"
          }`}
        >
          {linkSent ? "Reset your password" : " Reset password"}
        </h3>
      </div>
      {linkSent ? (
        <div className="text-[#6B7588] font-normal leading-6 text-base text-center">
          We’ve sent an email to ogbonnasamuel67@gmail.com. <br />
          Click the link in the email to reset your password. <br /> If you
          don’t see the email,{" "}
          <button className="text-[#004FC4]">click here</button> and we’ll send
          it again.
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col gap-3 mb-[23px]">
            <AuthFormInput
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              type="email"
              value={email}
            />
          </div>
          <button
            onClick={() => setLinkSent(true)}
            type="submit"
            className="w-full h-12 rounded-xl text-white font-medium text-base flex justify-center items-center bg-primarygreen1"
          >
            Send reset password link
          </button>
        </>
      )}
    </form>
  );
}
