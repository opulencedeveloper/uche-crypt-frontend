"use client";
import { useState } from "react";

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

interface Params {
  course: any;
  videoUrl: string;
  setVideoUrl: (url: string) => void;
}

export default function CourseSections({
  course,
  setVideoUrl,
  videoUrl,
}: Params) {
  const [value, setValue] = useState("");

  const handleChangeEpisode = (episode: string) => {
    setVideoUrl(episode);
    const section = document.getElementById("video-box");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="lg:w-[calc(100%-533px)] mt-6 lg:mt-0 px-2 lg:px-0 w-full border border-[#D1D1D6] rounded-xl flex flex-col overflow-hidden">
      <div className="w-full pb-8 pt-[40px] px-4 lg:px-[41px] border-b border-[#C7C9D9] flex flex-col">
        <h1 className="font-bold text-black text-lg lg:text-[28px] leading-7 lg:leading-[42px]">
          {course?.course_title}
        </h1>
        <div className="mt-8 h-9 w-full px-[17px] block lg:hidden">
          <SearchField value={value} setValue={setValue} />
        </div>
      </div>
      <div className="pb-[26px] px-2 lg:px-[43.5px] pt-8 w-full">
        <Accordion type="single" collapsible>
          {course?.course_details?.map((item: any, index: number) => {
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
                      {item?.title}
                    </h3>
                  </div>

                  <Image
                    src={ArrowDown}
                    alt=""
                    className="shrink-0 transition-transform duration-200"
                  />
                </AccordionTrigger>
                <AccordionContent className="w-full flex flex-col gap-3">
                  {item?.modules?.map((video: any, index: number) => {
                    return (
                      <div
                        key={video?.module_id}
                        onClick={() => handleChangeEpisode(video?.video_url)}
                        className={`py-2 px-0 hover:px-3 rounded-[4px]  hover:bg-[#F1FFF9] duration-200 cursor-pointer w-full flex flex-col ${
                          videoUrl === video?.video_url
                            ? "bg-white"
                            : "bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <p className="text-xs font-normal text-black leading-6">
                            Module {index + 1}
                          </p>
                          <div className="h-8 border-r border-[#C7C9D9]"></div>
                          <div className="flex gap-1 items-center">
                            <div
                              className={`min-w-6 max-h-6 h-6 rounded-full flex text-white justify-center items-center ${
                                video?.watched
                                  ? "bg-primarygreen1"
                                  : "bg-[#828282]"
                              }`}
                            >
                              <Check width={16} height={16} />
                            </div>
                            <p className="text-black text-base leading-6 font-normal">
                              {video?.title}
                            </p>
                          </div>
                        </div>
                        <p className="text-[#8F90A6] font-normal text-xs leading-[18px]">
                          4 mins video
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
