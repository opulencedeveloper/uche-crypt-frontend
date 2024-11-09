"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/contexts/user";
import { useMyLearning } from "@/hooks/learning";

import Cookies from "js-cookie";
import SearchField from "@/components/application/search-field";
import CourseSections from "@/components/application/my-learning/course-sections";
import Spinner from "@/assets/images/auth-layout/spinner.svg";
import Image from "next/image";

import Video from "@/components/application/my-learning/video";

export default function CourseOverview({ slug }: { slug: string }) {
  const [value, setValue] = useState("");
  const [course, setCourse]: any = useState(null);
  const [currentVideo, setCurrentVideo]: any = useState(null);

  const { user }: any = useUser();
  const { getCourse } = useMyLearning();

  const token = Cookies.get("token");

  useEffect(() => {
    if (user && token) {
      getCourse({ token, id: slug, setData: setCourse });
    }
  }, [user]);

  useEffect(() => {
    if (course) {
      let foundModule = null;
      course.course_details.some((section: any, videoItemIndex: number) => {
        const moduleIndex = section.modules.findIndex(
          (module: any) => !module.watched
        );
        if (moduleIndex !== -1) {
          const moduleItem = section.modules[moduleIndex];

          foundModule = {
            ...moduleItem,
            chapter: moduleIndex + 1,
            module: videoItemIndex + 1,
            moduleTitle: section.title,
            id: moduleItem.module_id,
          };
          return true;
        }
        return false;
      });

      if (foundModule) {
        setCurrentVideo(foundModule);
      } else {
        const lastSection = course.course_details.at(-1);
        const lastModule = lastSection?.modules.at(-1);
        if (lastModule) {
          setCurrentVideo({
            ...lastModule,
            chapter: lastSection.modules.length,
            module: course.course_details.length,
            moduleTitle: lastSection.title,
            id: lastModule.module_id,
          });
        }
      }
    }
  }, [course]);

  return (
    <>
      {course ? (
        <>
          <div className="w-full hidden lg:flex justify-between mb-3 mt-8">
            <div className="h-9 w-[361px]">
              <SearchField setValue={setValue} value={value} />
            </div>
          </div>

          <div className="w-full px-6 xl:px-0 lg:flex-row flex-col-reverse gap-[17px] items-start  flex">
            <CourseSections
              currentVideo={currentVideo}
              setCurrentVideo={setCurrentVideo}
              course={course}
            />
            <Video
              id={slug || ""}
              item={currentVideo}
              setCourse={setCourse}
              setCurrentVideo={setCurrentVideo}
            />
          </div>
        </>
      ) : (
        <div className="w-full py-10 flex justify-center items-center">
          <Image
            className={`animate-spin mt-4 ${course ? "hidden" : "block"}`}
            width={24}
            height={24}
            alt=""
            src={Spinner}
          />
        </div>
      )}
    </>
  );
}
