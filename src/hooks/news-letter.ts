"use client";

import axios from "@/lib/axios";

import { useToast } from "@/contexts/toast";

interface subscribeParams {
  setLoading: (value: boolean) => void;
  email: string;
}

export const useNewsLetter = () => {
  const { setToast, setMessage }: any = useToast();

  const notifyUser = (toast: string, message: string) => {
    setToast(toast);
    setMessage(message);

    setTimeout(() => {
      setMessage("");
      setToast("");
    }, 4000);
  };

  const subscribe = async ({ email, setLoading }: subscribeParams) => {
    const config = {
      url: "/newsletter",
      method: "POST",
      data: { email },
    };
    try {
      setLoading(true);
      await axios.request(config);

      setLoading(false);

      notifyUser("success", "Email added to newsletter successfully!");
    } catch (error: any) {
      setLoading(false);
      notifyUser("erroor", error?.response?.data?.description || "Error");
    }
  };

  return {
    subscribe,
  };
};
