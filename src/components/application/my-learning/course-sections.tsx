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

import ArrowDown from "@/assets/images/chevron-down-green.svg";
import SearchField from "../search-field";

interface Params {
  course: any;
  currentVideo: any;
  setCurrentVideo: (url: any) => void;
}

export default function CourseSections({
  course,
  currentVideo,
  setCurrentVideo,
}: Params) {
  const [value, setValue] = useState("");

  const handleChangeEpisode = (
    episode: any,
    chapter: number,
    module: number,
    moduleTitle: string,
    id: string
  ) => {
    setCurrentVideo({ ...episode, chapter, module, moduleTitle, id });
    const section = document.getElementById("video-box");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="lg:w-[calc(100%-533px)] mt-3 lg:mt-0 px-2 lg:px-0 w-full border border-[#D1D1D6] rounded-xl flex flex-col overflow-hidden">
      <div className="w-full pb-8 pt-[40px] min-h-[100px] px-2 mini:px-4 lg:px-[41px] border-b border-[#C7C9D9] flex flex-col">
        <h1 className="font-bold text-black text-base mini:text-lg lg:text-[28px] mini:leading-7 lg:leading-[42px]">
          {course?.course_title}
        </h1>
        <div className="mini:mt-8 mt-4 h-9 w-full tablet:px-[17px] block lg:hidden">
          <SearchField value={value} setValue={setValue} />
        </div>
      </div>
      <div className="pb-[26px] px-2 lg:px-[43.5px] min-h-[400px] pt-8 w-full">
        <Accordion type="single" collapsible>
          {course?.course_details?.map((item: any, index: number) => {
            return (
              <AccordionItem
                key={index}
                value={String(index)}
                className="rounded-xl mb-2 border border-[#D1D1D6] pb-2 px-3 mini:px-6"
              >
                <AccordionTrigger className="items-start">
                  <div className="flex flex-col gap-3 items-start">
                    <p className="text-black font-normal text-base tablet:text-lg">
                      Module {index + 1}
                    </p>
                    <h3 className="text-black text-start font-bold text-base tablet:text-lg">
                      {item?.title}
                    </h3>
                  </div>

                  <Image
                    src={ArrowDown}
                    alt=""
                    className="shrink-0 transition-transform duration-200"
                  />
                </AccordionTrigger>
                <AccordionContent className="w-full flex flex-col gap-2 mini:gap-3">
                  {item?.modules?.map((video: any, moduleIndex: number) => {
                    return (
                      <div
                        key={video?.module_id}
                        onClick={() =>
                          handleChangeEpisode(
                            video,
                            moduleIndex + 1,
                            index + 1,
                            item?.title,
                            item?.module_id
                          )
                        }
                        className={`py-2 hover:px-3 rounded-[4px]  hover:bg-[#F1FFF9] duration-200 cursor-pointer w-full flex flex-col ${
                          currentVideo?.video_url === video?.video_url
                            ? "bg-[#F1FFF9] px-3"
                            : "bg-white px-0"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <p className="tablet:text-xs text-[10px] font-normal text-black tablet:leading-6">
                            Chapter {moduleIndex + 1}
                          </p>
                          <div className="h-8 border-r border-[#C7C9D9]"></div>
                          <div className="flex gap-1.5 items-center">
                            <div
                              className={`tablet:min-w-6 min-w-4 max-h-6 tablet:h-6 h-4 rounded-full flex text-white justify-center items-center ${
                                video?.watched
                                  ? "bg-primarygreen1"
                                  : "bg-[#828282]"
                              }`}
                            >
                              <Check className="tablet:w-4 tablet:h-4 w-2.5 h-2.5" />
                            </div>
                            <p className="text-black text-xs tablet:text-base tablet:leading-6 font-normal">
                              {video?.title}
                            </p>
                          </div>
                        </div>
                        <p className="text-[#8F90A6] font-normal text-[8px] mini:text-xs mini:leading-[18px]">
                          {video?.video_duration}
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
