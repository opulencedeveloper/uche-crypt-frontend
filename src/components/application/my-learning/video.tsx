"use client";
import { useRef, useEffect } from "react";
import Vimeo from "@vimeo/player";
import { useMyLearning } from "@/hooks/learning";
import Cookies from "js-cookie";
import Link from "next/link";

interface Params {
  item: any;
  id: string;
  setCourse: (newCourse: any) => void;
  setCurrentVideo: (newVid: any) => void;
}

export default function Video({
  item,
  id,
  setCourse,
  setCurrentVideo,
}: Params) {
  const iframeRef: any = useRef(null);
  const { markVideoAsWatched } = useMyLearning();
  const token = Cookies.get("token");

  const proceedToNextChapter = () => {
    setCourse((prevCourse: any) => {
      const updatedCourse = { ...prevCourse };
      let nextModule = null;

      // Mark the current module as watched and find the next one
      updatedCourse.course_details.some(
        (section: any, sectionIndex: number) => {
          const moduleIndex = section.modules.findIndex(
            (module: any) => module.module_id === item?.id
          );

          if (moduleIndex !== -1) {
            // Mark this module as watched
            updatedCourse.course_details[sectionIndex].modules[
              moduleIndex
            ].watched = true;

            // Look for the next unwatched module
            for (
              let i = sectionIndex;
              i < updatedCourse.course_details.length;
              i++
            ) {
              const modules = updatedCourse.course_details[i].modules;
              const nextUnwatchedIndex = modules.findIndex(
                (module: any) => !module.watched
              );

              if (nextUnwatchedIndex !== -1) {
                const nextModuleData = modules[nextUnwatchedIndex];
                nextModule = {
                  ...nextModuleData,
                  chapter: nextUnwatchedIndex + 1,
                  module: i + 1,
                  moduleTitle: updatedCourse.course_details[i].title,
                  id: nextModuleData.module_id,
                };
                break;
              }
            }
            return true;
          }
          return false;
        }
      );

      // Set the next module as currentVideo, or the last one if all are watched
      if (nextModule) {
        setCurrentVideo(nextModule);
      } else {
        const lastSection = updatedCourse.course_details.at(-1);
        const lastModule = lastSection?.modules.at(-1);
        if (lastModule) {
          setCurrentVideo({
            ...lastModule,
            chapter: lastSection.modules.length,
            module: updatedCourse.course_details.length,
            moduleTitle: lastSection.title,
            id: lastModule.module_id,
          });
        }
      }

      return updatedCourse;
    });
  };

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Vimeo(iframeRef.current);
      player.on("play", () => {
        console.log("Played");
      });
    }
    console.log(item);
  }, [item, id, token, setCourse, setCurrentVideo]);

  return (
    <div className="lg:w-[516px] w-full flex flex-col">
      <iframe
        ref={iframeRef}
        id="video-box"
        className=" w-full border mb-6 border-[#D1D1D6] bg-black mt-5 lg:mt-0 rounded-xl h-max mini:h-[221px] lg:h-[340px] "
        width="100%"
        src={`${
          item?.video_url || "https://vimeo.com/1010831987"
        }?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
        title="m13cp7(Track whales wallet)"
        allow="autoplay; clipboard-write; picture-in-picture; fullscreen"
      ></iframe>
      <div className="w-full flex flex-col gap-3">
        <h2 className="text-black tablet:text-base text-sm">
          <b>
            Module {item?.module} - {item?.moduleTitle}
          </b>
        </h2>
        <div
          key={item?.module_id}
          className={`py-2 px-3 duration-200 bg-[#F1FFF9] w-full flex flex-col `}
        >
          <div className="flex items-center gap-3">
            <p className="tablet:text-xs text-[10px] font-normal text-black tablet:leading-6">
              Chapter {item?.chapter}
            </p>
            <div className="h-8 border-r border-[#C7C9D9]"></div>
            <div className="flex gap-1 items-center">
              <p className="text-black text-[12px] tablet:text-base tablet:leading-6 font-normal">
                {item?.title}
              </p>
            </div>
          </div>
          <p className="text-[#8F90A6] font-normal text-[8px] tablet:text-xs tablet:leading-[18px]">
            {item?.video_duration}
          </p>
        </div>
        <p className="text-black font-normal tablet:text-base text-xs">
          {item?.description}
        </p>
        {item?.links?.length > 0 && (
          <p className="text-black font-normal tablet:text-base text-xs">
            {item?.linkTitle || "Links"}:&nbsp;
            {item?.links?.map((link: any, index: number) => (
              <Link
                key={index}
                href={link?.link || ""}
                className="text-blue-600"
              >
                {link?.linkName} &nbsp;
              </Link>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}
