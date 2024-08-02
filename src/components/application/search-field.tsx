"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SearchImage from "@/assets/images/search.png";
import Microphone from "@/assets/images/voice.png";

interface Params {
  value: string;
  setValue: (value: string) => void;
}

export default function SearchField({ value, setValue }: Params) {
  const [listening, setListening] = useState<boolean>(false);
  const [recognition, setRecognition]: any = useState(null);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const startListening = () => {
    if (recognition) {
      recognition.start();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = false;
        recognitionInstance.interimResults = false;
        recognitionInstance.lang = "en-US";

        recognitionInstance.onstart = () => setListening(true);
        recognitionInstance.onend = () => setListening(false);
        recognitionInstance.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setValue(transcript);
        };

        setRecognition(recognitionInstance);
      } else {
        console.error(
          "Speech Recognition API is not supported in this browser."
        );
      }
    }
  }, []);

  return (
    <div className="relative px-2 w-full h-full rounded-[10px] bg-[#7676801F] flex items-center justify-between">
      <div className="w-[25px]">
        <Image src={SearchImage} alt="" />
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-[calc(100%-42px)] text-[#3C3C4399] placeholder:text-[#3C3C4399] text-[17px] font-normal bg-transparent outline-none"
        placeholder="Search"
      />
      <button
        onClick={startListening}
        className="text-xs text-[#3C3C4399] font-medium"
      >
        {listening ? "Listening" : <Image src={Microphone} alt="" />}
      </button>
    </div>
  );
}
