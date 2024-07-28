import React, { useState, useEffect } from "react";

interface Params {
  setLoading: (value: boolean) => void;
}

const ResendOTP: React.FC<Params> = ({ setLoading }) => {
  const [timer, setTimer] = useState(120);
  const [isCounting, setIsCounting] = useState(false);

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
    setLoading(true);
    setTimer(120);
    setIsCounting(true);
    setLoading(false);
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
