"use client";

import axios from "@/lib/axios";
import Cookies from "js-cookie";

import { useUser } from "@/contexts/user";
import { useToast } from "@/contexts/toast";

interface loginParams {
  email: string;
  password: string;
  setLoading: (value: boolean) => void;
}

interface registerParams {
  router: any;
  email: string;
  password: string;
  confirm_password: string;
  setLoading: (value: boolean) => void;
}

interface verifyEmailParams {
  router: any;
  email: string;
  otp: string;
  setLoading: (value: boolean) => void;
  setError: (value: boolean) => void;
}

interface forgotPasswordParams {
  email: string;
  setLoading: (value: boolean) => void;
  handleSuccess?: () => void;
}

export const useAuth = () => {
  const { setUser }: any = useUser();
  const { setMessage, setToast, setPosition }: any = useToast();

  const notifyUser = (toast: string, message: string, position: string) => {
    setToast(toast);
    setMessage(message);
    setPosition(position);

    setTimeout(() => {
      setMessage("");
      setToast("");
      setPosition("right");
    }, 4000);
  };

  const login = async ({ email, setLoading, password }: loginParams) => {
    const config = {
      url: "/signin",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email, password },
    };
    try {
      setLoading(true);
      const res = await axios.request(config);
      console.log(res);
      setLoading(false);

      notifyUser("success", "Login Successful", "right");
    } catch (error: any) {
      setLoading(false);
      notifyUser("error", error.message || "Failed To Login", "right");
    }
  };

  const verifyEmail = async ({
    email,
    setLoading,
    otp,
    router,
    setError,
  }: verifyEmailParams) => {
    const config = {
      url: "/verify/email",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email, otp },
    };
    try {
      setLoading(true);
      await axios.request(config);
      setLoading(false);
      notifyUser("success", "Email verified", "center");
      router.push("/login");
    } catch (error) {
      setLoading(false);
      notifyUser("error", "Invalid OTP", "center");
      setError(true);
    }
  };

  const register = async ({
    email,
    setLoading,
    password,
    confirm_password,
    router,
  }: registerParams) => {
    const config = {
      url: "/signup",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email, password, confirm_password },
    };
    try {
      setLoading(true);
      await axios.request(config);
      setLoading(false);

      notifyUser(
        "success",
        "Account created successfuly, verify email.",
        "right"
      );

      Cookies.set("account-email", email);
      router.push("/email-verification");
    } catch (error: any) {
      setLoading(false);
      notifyUser("error", error.message || "Failed To Create Account", "right");
    }
  };

  const forgotPassword = async ({
    email,
    setLoading,
    handleSuccess,
  }: forgotPasswordParams) => {
    const config = {
      url: "/forgot/password",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email },
    };
    try {
      setLoading(true);
      await axios.request(config);
      setLoading(false);
      if (handleSuccess) {
        handleSuccess();
      } else {
        notifyUser("success", "Reset password link sent.", "right");
      }
    } catch (error: any) {
      setLoading(false);
      notifyUser("error", error.message || "Error making request", "center");
    }
  };

  return {
    login,
    register,
    verifyEmail,
    forgotPassword,
  };
};
