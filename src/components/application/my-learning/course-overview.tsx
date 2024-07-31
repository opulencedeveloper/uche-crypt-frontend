"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/contexts/user";
import { useMyLearning } from "@/hooks/learning";

import Cookies from "js-cookie";
import SearchField from "@/components/application/search-field";
import CourseSections from "@/components/application/my-learning/course-sections";

import Video from "@/components/application/my-learning/video";

export default function CourseOverview({ slug }: { slug: string }) {
  const [value, setValue] = useState("");
  const [course, setCourse]: any = useState(null);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

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
      setCurrentVideoUrl(course.course_details[0].modules[0].video_url);
    }
  }, [course]);

  return (
    <>
      <div className="w-full hidden lg:flex justify-between mb-3 mt-8">
        <div className="h-9 w-[361px]">
          <SearchField setValue={setValue} value={value} />
        </div>
      </div>

      {course && (
        <div className="w-full px-6 xl:px-0 lg:flex-row flex-col-reverse gap-[17px] items-start mb-16 flex">
          <CourseSections
            videoUrl={currentVideoUrl}
            setVideoUrl={setCurrentVideoUrl}
            course={course}
          />
          <Video url={currentVideoUrl} />
        </div>
      )}
    </>
  );
}
