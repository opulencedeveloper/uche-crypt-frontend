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
  bought: boolean;
  handleBuyCourse: () => void;
}

export default function Contents({
  contents,
  handleBuyCourse,
  bought,
}: Params) {
  return (
    <div className="w-full flex flex-col px-6 xl:px-0 mb-[34px] lg:mb-0">
      <h3 className="text-dark1 font-bold text-[28px] leading-[40px] tablet:text-[32px] tablet:leading-[48px] mb-3 lg:mb-6">
        Course content
      </h3>
      <Accordion type="single" collapsible>
        {contents.map((item: any, index: number) => {
          return (
            <AccordionItem
              key={index}
              value={String(index)}
              className="rounded-xl mb-2 border border-[#D1D1D6] pb-2 px-6"
            >
              <AccordionTrigger className="items-start">
                <div className="flex flex-col gap-3 items-start">
                  <p className="text-black font-normal text-lg">
                    Chapter {index + 1}
                  </p>
                  <h3 className="text-black text-start font-bold text-lg">
                    {item.title}
                  </h3>
                </div>

                <Image
                  src={ArrowDown}
                  alt=""
                  className="shrink-0 transition-transform duration-200"
                />
              </AccordionTrigger>
              <AccordionContent className="w-full flex flex-col gap-3">
                {item.modules.map((module: any, moduleIndex: number) => {
                  return (
                    <div
                      key={moduleIndex}
                      className="py-2 px-0 rounded-[4px] bg-white  duration-200 cursor-pointer w-full flex flex-col"
                    >
                      <div className="flex items-center gap-3">
                        <p className="text-xs font-normal text-black leading-6">
                          Module {moduleIndex + 1}
                        </p>
                        <div className="h-8 border-r border-[#C7C9D9]"></div>
                        <div className="flex gap-1 items-center">
                          <p className="text-black text-base leading-6 font-normal">
                            {module.title}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#8F90A6] font-normal text-xs leading-[18px]">
                        4 video
                      </p>
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      <button
        onClick={handleBuyCourse}
        className="bg-primarygreen1 mb-42 h-fixed52 w-[275px] hidden lg:flex justify-center items-center text-base font-medium text-white rounded-xl px-34 gap-2"
      >
        {bought ? (
          <>Go to course</>
        ) : (
          <>
            <Image src={BankNote} alt="" /> Buy course
          </>
        )}
      </button>
    </div>
  );
}
