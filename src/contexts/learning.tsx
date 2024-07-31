"use client";
import { createContext, useContext, useState } from "react";

const LearningContext: any = createContext(null);

export const LearningProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [courses, setCourses] = useState(null);

  return (
    <LearningContext.Provider value={{ courses, setCourses }}>
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => useContext(LearningContext);
