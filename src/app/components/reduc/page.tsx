"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux3/hooks/hooks";
import { decrement, increment, nothing } from "../../redux3/slice/counter/counter";

const Page = () => {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button className="border-gray-100 border-2 py-3 px-4" onClick={() => dispatch(increment())}>helo</button>
        <button className="border-gray-100 border-2 py-3 px-4" onClick={() => dispatch(decrement())}>bye</button>
        <button className="border-gray-100 border-2 py-3 px-4" onClick={() => dispatch(nothing())}>nothing</button>
      </div>
    </>
  );
};

export default Page;
