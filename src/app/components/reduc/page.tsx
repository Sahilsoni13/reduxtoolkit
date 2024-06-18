"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux3/hooks/hooks";
import { decrement, increment, nothing } from "../../redux3/slice/counter/counter";
import { addnum, subnum } from "@/app/redux3/slice/counter2/counter2";

const Page = () => {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const count2 = useAppSelector(state => state.count2)
  return (
    <>
      <div>
        <h1>{count}</h1>
        
        <button className="border-gray-100 border-2 py-3 px-4" onClick={() => dispatch(increment())}>helo</button>
        <button className="border-gray-100 border-2 py-3 px-4" onClick={() => dispatch(decrement())}>bye</button>
        <button className="border-gray-100 border-2 py-3 px-4" onClick={() => dispatch(nothing())}>nothing</button>
      </div>
      <div>
      <h1>{count2}</h1>
      <button onClick={() => dispatch(addnum())} className="border-2 border-cyan-400 py-3 px-4" >addnum</button>
      <button onClick={() => dispatch(subnum())} className="border-2 border-cyan-400 py-3 px-4" >subnum</button>
      </div>
    </>
  );
};

export default Page;
