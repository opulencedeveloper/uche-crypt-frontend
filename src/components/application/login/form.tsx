"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/navigation";

import AuthFormInput from "../auth-form-input";
import RollingSpinner from "@/assets/images/home/rolling-spinner.svg";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    login({ email, password, setLoading, router });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-[375px] max-w-full h-max rounded-xl bg-white py-[18px] px-5 sm:px-8 flex flex-col"
    >
      <div className="flex mb-1 items-center gap-1">
        <h3 className="text-dark1 font-bold text-xl sm:text-[22px] leading-[33px]">
          Sign in
        </h3>
        <div className="sm:py-1 py-0.5 px-1.5 sm:px-2.5 rounded-full bg-[#E5B80026]">
          <p className="text-xs font-normal leading-[18px] text-[#9B5C10]">
            Course access
          </p>
        </div>
      </div>
      <p className="text-[#6B7588] font-normal text-sm mb-[23px]">
        Get access to your buy courses
      </p>
      <div className="w-full flex flex-col gap-3 mb-[23px]">
        <AuthFormInput
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          type="email"
          value={email}
        />
        <AuthFormInput
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type your password"
          type="password"
          value={password}
        />
        <Link
          href="/forgot-password"
          className="text-primarygreen1 tsxt-sm sm:text-base text-right font-medium leading-6"
        >
          Forgot password ?
        </Link>
      </div>
      <button
        type="submit"
        className="w-full h-12  mb-[18px] rounded-xl text-white font-medium text-base flex justify-center items-center bg-primarygreen1"
      >
        {" "}
        {loading ? (
          <Image src={RollingSpinner} alt="" className=" h-7 w-max" />
        ) : (
          " Continue"
        )}
      </button>
      <div className="w-full justify-center flex items-center font-medium text-sm sm:text-base leading-6">
        <p className="text-dark1">Don’t have an account?</p>&nbsp;
        <Link href="/register" className="text-primarygreen1">
          Sign up
        </Link>
      </div>
    </form>
  );
}
