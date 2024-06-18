'use client'
import { useAppSelector } from "@/app/redux3/hooks/hooks";
import React from "react";


const Page = () => {
  const count = useAppSelector(state => state.counter);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Page;
