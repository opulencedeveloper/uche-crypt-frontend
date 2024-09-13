"use client";
import { useEffect, useState } from "react";
import RenderCourses from "@/components/application/course-details/render-courses";
import SearchField from "@/components/application/search-field";

interface Params {
  courses: any;
}

export default function AllCourses({ courses }: Params) {
  const [data, setData] = useState(courses);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let value = searchValue.trim();

    setData(
      courses.filter((item: any) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [searchValue]);

  return (
    <>
      <div className="w-full px-6 xl:px-0 lg:flex-row flex-col gap-y-4 mini:gap-y-8  flex justify-between my-4 mini:my-8">
        <h2 className="text-black font-bold tablet:text-[32px] text-xl mini:text-[28px] mini:leading-[40px] tablet:leading-[48px] ">
          Online Courses
        </h2>

        <div className="h-9 w-[361px] max-w-full">
          <SearchField value={searchValue} setValue={setSearchValue} />
        </div>
      </div>

      <RenderCourses courses={data} />
    </>
  );
}
