"use client";
import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import RollingSpinner from "@/assets/images/home/rolling-spinner.svg";
import AuthFormInput from "../../auth-form-input";

import LogoImage from "@/assets/images/navigation/logo.svg";

export default function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const { login, generateGoogleAuthLink, signInWithGoogle } = useAuth();
  const router = useRouter();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    login({ email, password, setLoading, router });
  };

  useEffect(() => {
    if (code) {
      signInWithGoogle({ setLoading, code, router });
    }
  }, [code]);

  return (
    <>
     <div className="mt-20 tablet:pt-0 top-12 z-40 left-0 w-full flex flex-col tablet:flex-row gap-8 tablet:gap-0 justify-center items-center mb-8">
        <Link href="/">
          <Image
            width={199.36}
            height={21}
            className="w-max mini:h-[21px] h-3"
            src={LogoImage}
            alt="Logo Image"
          />
        </Link>
      </div>
    <form
      onSubmit={handleFormSubmit}
      className="w-[375px] max-w-full h-max rounded-xl bg-white py-[18px] px-5 sm:px-8 flex flex-col"
    >
     
        <h3 className="text-dark1 geist700 mb-1 text-[13px] mini:text-xl sm:text-[22px] leading-6 mini:leading-[33px]">
        Welcome, Admin
        </h3>
      <p className="text-[#6B7588] font-normal text-[11px] mini:text-sm mb-3.5 mini:mb-[23px]">
       Manage your product
      </p>
      <div className="w-full flex flex-col gap-2 mini:gap-3 mb-3.5 mini:mb-[23px]">
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
       
      </div>
      <button
        type="submit"
        className="w-full h-11 mini:h-12 rounded-xl text-white font-medium text-[13px] mini:text-base flex justify-center items-center bg-primarygreen1"
      >
        {" "}
        {loading ? (
          <Image src={RollingSpinner} alt="" className=" h-7 w-max" />
        ) : (
          " Continue"
        )}
      </button>
      
      
    </form>
    </>
  );
}
