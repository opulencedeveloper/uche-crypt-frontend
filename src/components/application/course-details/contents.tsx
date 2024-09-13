import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import BankNote from "@/assets/images/home/bank-note.svg";
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
      <h3 className="text-dark1 font-bold text-xl mini:text-[28px] leading-[40px] tablet:text-[32px] tablet:leading-[48px] mb-3 lg:mb-6">
        Course content
      </h3>
      <Accordion type="single" collapsible>
        {contents.map((item: any, index: number) => {
          return (
            <AccordionItem
              key={index}
              value={String(index)}
              className="rounded-xl mb-2 border border-[#D1D1D6] pb-2 px-3 mini:px-6"
            >
              <AccordionTrigger className="items-start">
                <div className="flex flex-col gap-3 items-start">
                  <p className="text-black font-normal text-start text-sm mini:text-lg">
                    Chapter {index + 1} - {item.title}
                  </p>
                </div>

                <Image
                  src={ArrowDown}
                  alt=""
                  className="shrink-0 transition-transform duration-200"
                />
              </AccordionTrigger>
              <AccordionContent className="w-full">
                <ul className="w-full flex flex-col gap-1 list-inside list-disc">
                  {item.modules.map((module: any, moduleIndex: number) => {
                    return (
                      <li
                        key={moduleIndex}
                        className="text-black tablet:text-lg text-xs mini:text-base mini:leading-6 font-semibold"
                      >
                        {module.title}
                      </li>
                    );
                  })}
                </ul>
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
