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
    setOtherCourses: (data: any) => void;
  }

  interface buyCourse {
    token: string;
    courseId: string;
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

  const getGeneralCourses = async ({ setData }: { setData: any }) => {
    const config = {
      url: "/courses",
      method: "GET",
    };
    try {
      const res = await axios.request(config);
      setData(res.data.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getCourse = async ({
    token,
    setData,
    id,
    setOtherCourses,
  }: getCourseParams) => {
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
      await getGeneralCourses({ setData: setOtherCourses });
    } catch (error: any) {
      if (error?.response?.status === 401) {
        Cookies.remove("token");
        window.location.href = "/login";
      }
    }
  };

  const buyCourse = async ({ token, courseId }: buyCourse) => {
    const config = {
      url: "/pay/" + courseId,
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
        error?.response?.data?.description || "Something went wrong",
        "right"
      );
      if (error?.response?.status === 401) {
        Cookies.remove("token");
        window.location.href = "/login";
      }
    }
  };

  return { buyCourse, getAllCourses, getCourse };
};
