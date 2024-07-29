"use client";

import axios from "@/lib/axios";
import Cookies from "js-cookie";

import { useUser } from "@/contexts/user";
import { useToast } from "@/contexts/toast";

interface loginParams {
  router: any;
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

interface resetPasswordParams {
  router: any;
  email: string;
  otp: string;
  password: string;
  confirm_password: string;
  setLoading: (value: boolean) => void;
}

interface forgotPasswordParams {
  email: string;
  setLoading: (value: boolean) => void;
  handleSuccess?: () => void;
}

interface fetchUserParams {
  token: string;
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

  const login = async ({
    email,
    setLoading,
    password,
    router,
  }: loginParams) => {
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
      setLoading(false);

      if (res?.data?.description === "Logged in successfully") {
        notifyUser("success", "Logged in successfully", "right");
        Cookies.set("token", res.data.data.token || "");
        router.push("/my-learning");
      } else {
        Cookies.set("account-email", email);
        router.push("/email-verification");
      }
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

  const fetchUser = async ({ token }: fetchUserParams) => {
    const config = {
      url: "/user",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    try {
      const res = await axios.request(config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const resetPassword = async ({
    email,
    setLoading,
    otp,
    router,
    password,
    confirm_password,
  }: resetPasswordParams) => {
    const config = {
      url: "/forgot/password/change",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email, otp, password, confirm_password },
    };
    try {
      setLoading(true);
      await axios.request(config);
      setLoading(false);
      notifyUser("success", "Password changed successfully", "right");
      router.push("/login");
    } catch (error: any) {
      setLoading(false);
      notifyUser("error", error.message || "Invalid OTP", "right");
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
      notifyUser("error", error.message || "Error making request", "right");
    }
  };

  const resendVerificationCode = async ({
    email,
    setLoading,
    handleSuccess,
  }: forgotPasswordParams) => {
    const config = {
      url: "/resend/email/verification/otp",
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
      handleSuccess && handleSuccess();
      notifyUser("success", "Sent successfully!", "center");
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
    resetPassword,
    resendVerificationCode,
    notifyUser,
    fetchUser,
  };
};
