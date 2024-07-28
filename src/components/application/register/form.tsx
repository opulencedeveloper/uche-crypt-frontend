"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/navigation";

import AuthFormInput from "../auth-form-input";
import RollingSpinner from "@/assets/images/home/rolling-spinner.svg";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { register } = useAuth();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    register({ confirm_password, email, password, setLoading, router });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-[375px] max-w-full h-max rounded-xl bg-white py-[18px] px-8 flex flex-col"
    >
      <div className="flex mb-1 items-center gap-1">
        <h3 className="text-dark1 font-bold text-[22px] leading-[33px]">
          Sign Up
        </h3>
      </div>
      <p className="text-[#6B7588] font-normal text-sm mb-[23px]">
        Sign up and get an exclusive courses
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
        <AuthFormInput
          label="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Type your password"
          type="password"
          value={confirm_password}
        />
      </div>
      <button
        type="submit"
        className="w-full h-12 mb-[18px] rounded-xl text-white font-medium text-base flex justify-center items-center bg-primarygreen1"
      >
        {loading ? (
          <Image src={RollingSpinner} alt="" className=" h-7 w-max" />
        ) : (
          " Continue"
        )}
      </button>
      <div className="w-full justify-center flex items-center font-medium text-base leading-6">
        <p className="text-dark1">Already have an account? </p>&nbsp;
        <Link href="/login" className="text-primarygreen1">
          Sign In
        </Link>
      </div>
    </form>
  );
}
