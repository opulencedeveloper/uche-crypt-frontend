import React, { useState, useRef } from "react";

interface OTPInputProps {
  length: number;
  onChange: (otp: string) => void;
  styles?: {
    input?: string;
    focus?: string;
    filled?: string;
  };
  loading: boolean;
}

const OTPInput: React.FC<OTPInputProps> = ({
  length = 4,
  onChange,
  styles = {},
  loading,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    onChange(newOtp.join(""));
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    const newOtp = Array(length).fill("");

    for (let i = 0; i < pasteData.length; i++) {
      if (!isNaN(Number(pasteData[i]))) {
        newOtp[i] = pasteData[i];
      }
    }

    setOtp(newOtp);
    onChange(newOtp.join(""));

    setTimeout(() => {
      const nextIndex =
        pasteData.length < length ? pasteData.length : length - 1;
      inputRefs.current[nextIndex].focus();
    }, 0);
  };

  const handleFocusSlot = () => {
    let index = 0;
    while (index < 4) {
      if (otp[index].length > 0) {
        index += 1;
      } else {
        inputRefs.current[index].focus();
        index = 4;
      }
    }
  };

  return (
    <div className="w-full grid grid-cols-4 gap-2">
      {otp.map((value, index) => (
        <div key={index} className="col-span-1 relative">
          <div
            onClick={handleFocusSlot}
            className={`absolute w-full h-full top-0 left-0 bg-transparent ${
              index !== 0 && !otp[index - 1] ? "block" : "hidden"
            }`}
          ></div>
          <input
            key={index}
            type="text"
            placeholder="-"
            maxLength={1}
            value={
              value
                ? `${otp[index + 1]?.length || index === 3 ? "*" : value}`
                : ""
            }
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            ref={(el: any) => (inputRefs.current[index] = el!)}
            className={`w-full text-base border border-[#8F90A6] outline-none focus:outline-none font-medium placeholder:text-[#D2D2D2] flex items-center justify-center text-center h-8 mini:h-11 rounded-2xl ${
              value ? styles.filled : ""
            }`}
            disabled={loading}
          />
        </div>
      ))}
    </div>
  );
};

export default OTPInput;
