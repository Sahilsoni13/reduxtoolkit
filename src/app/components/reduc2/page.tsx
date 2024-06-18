'use client'
import { useAppSelector } from "@/app/redux3/hooks/hooks";
import React from "react";


const Page = () => {
  const count = useAppSelector(state => state.counter);
  const count2 = useAppSelector(state => state.count2)
  return (
    <div>
      <h1>{count}</h1>
      <h1>{count2}</h1>
    </div>
  );
};

export default Page;
