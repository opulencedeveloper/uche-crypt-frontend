"use client";
import { useLearning } from "@/contexts/learning";

import RenderCourses from "@/components/application/course-details/render-courses";
import { useEffect } from "react";

export default function EnrolledCourses() {
  const { courses }: any = useLearning();

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  return (
    <>
      {" "}
      <div className="w-full px-6 xl:px-0  flex justify-between mb-3 mt-6 lg:mt-8">
        <h2 className="text-black font-bold tablet:text-[32px] text-xl mini:text-[28px] mini:leading-10 tablet:leading-[48px] ">
          My learning{" "}
          <span className="text-[#6B7588]">({courses?.length || 0})</span>
        </h2>
      </div>
      {courses && <RenderCourses bought={true} courses={courses} />}
    </>
  );
}
