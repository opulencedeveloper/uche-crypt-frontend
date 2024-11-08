"use client";

import axios from "@/lib/axios";
import Cookies from "js-cookie";

import { useToast } from "@/contexts/toast";

export const useMyLearning = () => {
  const { setMessage, setToast, setPosition }: any = useToast();

  interface allLearning {
    token: string;
    setData: (data: any) => void;
  }

  interface getCourseParams {
    id: string;
    token: string;
    setData: (data: any) => void;
  }

  interface buyCourse {
    token: string;
    url: string;
  }

  const notifyUser = (toast: string, message: string, position: string) => {
    setToast(toast);
    setMessage(message);
    setPosition(position);

    setTimeout(() => {
      setMessage("");
      setToast("");
      setPosition("right");
    }, 3000);
  };

  const getAllCourses = async ({ token, setData }: allLearning) => {
    const config = {
      url: "/user/course/enrolled",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    try {
      const res = await axios.request(config);
      setData(res.data.data);
    } catch (error: any) {
      if (error?.response?.status === 401) {
        Cookies.remove("token");
        window.location.href = "/login";
      }
    }
  };

  const getCourse = async ({ token, setData, id }: getCourseParams) => {
    const config = {
      url: "/user/course/enrolled/" + id,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    try {
      const res = await axios.request(config);
      setData(res.data.data);
    } catch (error: any) {
      if (error?.response?.status === 401) {
        Cookies.remove("token");
        window.location.href = "/login";
      }
    }
  };

  const buyCourse = async ({ token, url }: buyCourse) => {
    const config = {
      url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    try {
      const res = await axios.request(config);
      let authorization_url = res.data.data.authorization_url;
      if (authorization_url) {
        window.open(authorization_url);
      }
    } catch (error: any) {
      notifyUser(
        "error",
        error?.response?.data?.description ||
          error?.message ||
          "Something went wrong",
        "right"
      );
      console.log(error);
      if (error?.response?.status === 401) {
        Cookies.remove("token");
        window.location.href = "/login";
      }
    }
  };
  const markVideoAsWatched = async ({
    courseId,
    moduleId,
    token,
  }: {
    courseId: string;
    moduleId: string;
    token: string;
  }) => {
    const config = {
      url: `mark/watched?course_id=${courseId}&module_id=${moduleId}`,
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    try {
      const res = await axios.request(config);
      console.log(res);
    } catch (error: any) {
      notifyUser(
        "error",
        error?.response?.data?.description ||
          error?.message ||
          "Something went wrong",
        "right"
      );

      if (error?.response?.status === 401) {
        Cookies.remove("token");
        window.location.href = "/login";
      }
    }
  };

  return { buyCourse, getAllCourses, getCourse, markVideoAsWatched };
};
