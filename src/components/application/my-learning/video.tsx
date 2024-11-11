"use client";
import { useRef, useEffect } from "react";
import Player from "@vimeo/player";
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
  const vimeoRef = useRef(null);
  const playerRef = useRef<Player | null>(null); // Reference for the player instance
  const { markVideoAsWatched } = useMyLearning();
  const token = Cookies.get("token");

  const proceedToNextChapter = () => {
    markVideoAsWatched({
      token: token || "",
      courseId: id,
      moduleId: item?.id,
    });

    setCourse((prevCourse: any) => {
      const updatedCourse = { ...prevCourse };
      let nextModule = null;

      updatedCourse.course_details.some(
        (section: any, sectionIndex: number) => {
          const moduleIndex = section.modules.findIndex(
            (module: any) => module.module_id === item?.id
          );

          if (moduleIndex !== -1) {
            updatedCourse.course_details[sectionIndex].modules[
              moduleIndex
            ].watched = true;

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
    console.log(item);

    const videoId = item?.video_url?.split("/").pop();

    if (videoId && vimeoRef.current) {
      if (playerRef.current) {
        playerRef.current.destroy(); // Destroy the previous player instance
      }

      const player = new Player(vimeoRef.current, {
        id: videoId,
      });

      player.on("ended", () => {
        proceedToNextChapter();
      });

      playerRef.current = player; // Save the player instance
    }

    // Clean up player on component unmount or item change
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [item?.video_url]); // Depend on item.video_url to reinitialize on video change

  return (
    <div className="lg:w-[516px] w-full flex flex-col">
      {item?.video_url ? (
        <div
          ref={vimeoRef}
          id="video-box"
          className=" w-full border mb-6 overflow-hidden flex justify-center items-center border-[#D1D1D6] bg-black mt-5 lg:mt-0 rounded-xl h-max mini:h-[221px] lg:h-[340px] "
        ></div>
      ) : (
        // <iframe
        //   src={item?.pdf_url?.replace("/edit", "/preview")}
        //   className=" w-full border mb-6 overflow-hidden flex justify-center items-center border-[#D1D1D6] bg-black mt-5 lg:mt-0 rounded-xl h-max mini:h-[221px] lg:h-[340px] "
        // ></iframe>
        <></>
      )}

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
                target="_blank"
                href={link?.link || ""}
                className="text-blue-600"
              >
                {link?.linkName} &nbsp;
              </Link>
            ))}
          </p>
        )}
        {item?.pdf_url && (
          <p className="text-black font-normal tablet:text-base text-xs">
            View Document:&nbsp;
            <button
              type="button"
              onClick={() => {
                proceedToNextChapter();
                window.open(item?.pdf_url || "", "_blank");
              }}
              className="text-blue-600"
            >
              Document URL
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
