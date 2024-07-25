import axios from "@/lib/axios";
import { toast } from "react-toastify";
import Image from "next/image";
import VerifyImage from "@/assets/images/auth-layout/verify.png";

interface subscribeParams {
  setLoading: (value: boolean) => void;
  email: string;
}

export const useNewsLetter = () => {
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

      toast.success("Email added to newsletter successfully!", {
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
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    subscribe,
  };
};
