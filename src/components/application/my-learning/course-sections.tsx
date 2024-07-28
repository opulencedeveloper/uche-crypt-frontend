import Image from "next/image";
import { Check } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import courseSectionsData from "@/resources/my-learning/sections.json";
import ArrowDown from "@/assets/images/chevron-down-green.svg";
import SearchField from "../search-field";

export default function CourseSections() {
  return (
    <div className="lg:w-[calc(100%-533px)] mt-6 lg:mt-0 px-2 lg:px-0 w-full border border-[#D1D1D6] rounded-xl flex flex-col overflow-hidden">
      <div className="w-full pb-8 pt-[40px] px-4 lg:px-[41px] border-b border-[#C7C9D9] flex flex-col">
        <h1 className="font-bold text-black text-lg lg:text-[28px] leading-7 lg:leading-[42px]">
          Introduction to Crypto Prt.- beginner friendly
        </h1>
        <div className="mt-8 h-9 w-full px-[17px] block lg:hidden">
          <SearchField value="" setValue={(value) => {}} />
        </div>
      </div>
      <div className="pb-[26px] px-2 lg:px-[43.5px] pt-8 w-full">
        <Accordion type="single" collapsible>
          {courseSectionsData.map((item) => {
            return (
              <AccordionItem
                key={item.chapter}
                value={item.index}
                className="rounded-xl mb-2 border border-[#D1D1D6] pb-2 px-6"
              >
                <AccordionTrigger className="items-start">
                  <div className="flex flex-col gap-3 items-start">
                    <p className="text-black font-normal text-lg">
                      {item.chapter}
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
                  {item.videos.map((video) => {
                    return (
                      <div
                        key={video.module}
                        className="py-2 px-0 hover:px-3 rounded-[4px] bg-white hover:bg-[#F1FFF9] duration-200 cursor-pointer w-full flex flex-col"
                      >
                        <div className="flex items-center gap-3">
                          <p className="text-xs font-normal text-black leading-6">
                            {video.module}
                          </p>
                          <div className="h-8 border-r border-[#C7C9D9]"></div>
                          <div className="flex gap-1 items-center">
                            <div
                              className={`min-w-6 max-h-6 h-6 rounded-full flex text-white justify-center items-center ${
                                video.watched
                                  ? "bg-primarygreen1"
                                  : "bg-[#828282]"
                              }`}
                            >
                              <Check width={16} height={16} />
                            </div>
                            <p className="text-black text-base leading-6 font-normal">
                              {video.title}
                            </p>
                          </div>
                        </div>
                        <p className="text-[#8F90A6] font-normal text-xs leading-[18px]">
                          {video.duration} video
                        </p>
                      </div>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}

{
}
