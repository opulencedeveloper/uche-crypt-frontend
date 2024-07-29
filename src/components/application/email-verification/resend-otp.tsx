import { useAuth } from "@/hooks/auth";
import React, { useState, useEffect } from "react";

interface Params {
  email: string;
  setLoading: (value: boolean) => void;
}

const ResendOTP: React.FC<Params> = ({ setLoading, email }) => {
  const [timer, setTimer] = useState(120);
  const [isCounting, setIsCounting] = useState(false);

  const { resendVerificationCode } = useAuth();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCounting && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsCounting(false);
    }
    return () => clearInterval(interval);
  }, [isCounting, timer]);

  const handleResend = () => {
    resendVerificationCode({
      setLoading,
      email,
      handleSuccess: () => {
        setTimer(120);
        setIsCounting(true);
      },
    });
  };

  return (
    <div className="w-full flex justify-center items-center mt-4 text-sm font-normal text-[#626D7D]">
      Didn’t receive an Email?&nbsp;
      <button
        className={`text-[#06C270] ${isCounting ? "cursor-not-allowed" : ""}`}
        onClick={handleResend}
        disabled={isCounting}
      >
        Resend{" "}
        {isCounting &&
          `(${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")})`}
      </button>
    </div>
  );
};

export default ResendOTP;
