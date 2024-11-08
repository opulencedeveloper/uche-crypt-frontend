"use client";
import { useState } from "react";
import { useMyLearning } from "@/hooks/learning";
import { usePathname, useRouter } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import Cookies from "js-cookie";
import Image from "next/image";
import XMark from "@/assets/images/navigation/x-mark.svg";

import paymentMethods from "./payment-methods.json";

interface Params {
  open: boolean;
  setOpen: (value: boolean) => void;
  amount: number;
  courseId: string;
}

export default function PaymentModal({
  open,
  setOpen,
  amount,
  courseId,
}: Params) {
  const [selected, setSelected] = useState("");
  const { buyCourse } = useMyLearning();
  const pathname = usePathname();
  const router = useRouter();

  const token = Cookies.get("token");

  const handleProceed = () => {
    if (!token) {
      Cookies.set("redirectionLink", pathname);
      router.push("/login");
      return;
    }
    if (selected === "paystack") {
      buyCourse({ token: token || "", url: `/pay/${courseId}` });
    } else {
      buyCourse({ token: token || "", url: `/pay/with/crypto/${courseId}` });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-screen z-50 tablet:z-20 h-[100dvh] bg-[#0000006E] fixed top-0 left-0 flex justify-center items-start pt-16 tablet:pt-0 tablet:items-center"
        >
          <div className="bg-white max-h-[80%] overflow-y-auto h-max w-[390px] max-w-[calc(100vw-40px)] p-6 pt-2 rounded-3xl">
            <div className="h-8 mb-4 w-full flex items-center justify-end">
              <button
                onClick={() => setOpen(false)}
                className="w-max h-max text-sm font-normal text-[#6B7588] flex items-center gap-1.5 outline-none bg-none border-none"
              >
                Close{" "}
                <div className="w-[26.5px] h-[26.5px] rounded-full bg-[#6B7588]/40 flex justify-center items-center">
                  <Image src={XMark} alt="" />
                </div>
              </button>
            </div>
            <div className="w-full mb-6 flex flex-col">
              <h1 className="tablet:leading-[33px] mb-0.5 text-dark1 text-lg tablet:text-[22px]">
                <b>Payment options</b>
              </h1>
              <p className="tablet:text-sm text-xs mb-6 font-normal text-[#6B7588] tablet:leading-[21px]">
                Select payment
              </p>
              <div className="w-full flex flex-col gap-2">
                {paymentMethods.map((item, index: number) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setSelected(item.name)}
                      className={`w-full cursor-pointer rounded-xl duration-300 border h-max py-2 px-3 flex justify-between items-center ${
                        selected === item.name
                          ? "border-primarygreen1 bg-[#F1FFF9]"
                          : "border-[#C7C9D9] bg-transparent"
                      }`}
                    >
                      <div className="flex gap-2 items-center">
                        <div
                          className={`min-w-3.5 bg-transparent min-h-3.5 border duration-300 rounded-full flex justify-center items-center ${
                            selected === item.name
                              ? "border-primarygreen1"
                              : "border-[#828282]"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 duration-300 rounded-full ${
                              selected === item.name
                                ? "bg-primarygreen1"
                                : "bg-transparent"
                            }`}
                          ></div>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <p
                            className={`tablet:text-sm text-xs font-normal duration-300 tablet:leading-[21px] ${
                              selected === item.name
                                ? "text-primarygreen1"
                                : "text-dark1"
                            }`}
                          >
                            {item.title}
                          </p>
                          <img
                            src={item.logo}
                            alt=""
                            className="w-[81px] h-max"
                          />
                        </div>
                      </div>
                      <div className="min-w-max gap-0.5 flex flex-col h-max">
                        <p
                          className={`font-normal duration-300 text-[10px] tablet:text-xs leading-[18px] ${
                            selected === item.name
                              ? "text-primarygreen1"
                              : "text-[#6B7588]"
                          }`}
                        >
                          Amount
                        </p>
                        <h2
                          className={`leading-6 text-sm tablet:text-base ${
                            selected === item.name
                              ? "text-primarygreen1"
                              : "text-black"
                          }`}
                        >
                          <b>${amount}</b>
                        </h2>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              disabled={selected === ""}
              onClick={handleProceed}
              className={`w-full h-12 text-white duration-300 tablet:text-base text-sm font-medium flex justify-center items-center rounded-xl ${
                selected === "" ? "bg-[#C7C9D9]" : "bg-primarygreen1"
              }`}
              type="button"
            >
              Proceed payment
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
