import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import BankNote from "@/assets/images/home/bank-note.png";
import ArrowDown from "@/assets/images/chevron-down-green.svg";

interface Params {
  contents: any;
}

export default function Contents({ contents }: Params) {
  return (
    <div className="w-full flex flex-col px-6 xl:px-0 mb-[34px] lg:mb-0">
      <h3 className="text-dark1 font-bold text-[32px] leading-[48px] mb-3 lg:mb-6">
        Course content
      </h3>
      <Accordion type="single" collapsible>
        {contents.map((item: any, index: number) => {
          return (
            <AccordionItem
              key={index}
              value={String(index)}
              className="rounded-xl border border-[#D1D1D6] mb-3 pb-2 px-6"
            >
              <AccordionTrigger className="items-start">
                <div className="flex flex-col gap-3 items-start">
                  <p className="text-black font-normal text-lg">
                    Module {index + 1}
                  </p>
                  <h3 className="text-black text-start font-bold text-[22px]">
                    {item.title}
                  </h3>
                </div>
                <Image
                  src={ArrowDown}
                  alt=""
                  className="shrink-0 transition-transform duration-200"
                />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base text-[#6B7588] font-normal">
                  This course is designed for the absolute beginner. No previous{" "}
                  <br />
                  experience with Crypto is required to start....
                </p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      <button className="bg-primarygreen1 mb-42 h-fixed52 w-[275px] hidden lg:flex justify-center items-center text-base font-medium text-white rounded-xl px-34 gap-2">
        <Image src={BankNote} alt="" /> Buy course
      </button>
    </div>
  );
}
