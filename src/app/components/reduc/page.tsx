"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux3/hooks/hooks";
import {
  decrement,
  increment,
  addanything,
} from "../../redux3/slice/counter/counter";
import { addbynum, addnum, subnum } from "@/app/redux3/slice/counter2/counter2";
import "@radix-ui/themes/styles.css";
import { Button, Spinner } from "@radix-ui/themes";
import { BookmarkIcon } from "@radix-ui/react-icons";

const Page: React.FC = () => {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const count2 = useAppSelector((state) => state.count2);
  const [formdata, setformdata] = useState<string>("");

  const handlechange = (e: any) => {
    setformdata(e.target.value);
    console.log(formdata);
  };

  const handlesubmit = (e: any) => {
    e.preventDefault();
    console.log(formdata);
  };
  return (
    <>
      <div>
        <h1>{count}</h1>

        <button
          className="border-gray-100 border-2 py-3 px-4"
          onClick={() => dispatch(increment())}
        >
          helo
        </button>
        <button
          className="border-gray-100 border-2 py-3 px-4"
          onClick={() => dispatch(decrement())}
        >
          bye
        </button>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            onChange={handlechange}
            name="name"
            id="name"
            value={formdata}
            className="text-black"
          />
          <button
            type="submit"
            className="border-gray-100 border-2 py-3 px-4"
            onClick={() => {
              handlesubmit;
              dispatch(addanything(formdata));
            }}
          >
            addanything
          </button>
        </form>
      </div>
      <div>
        <h1>{count2}</h1>
        {/* <Button color="gray" className="text-white"  variant="solid" size="3" onClick={() => dispatch(addnum())}>
        <Spinner loading>
      <BookmarkIcon /> addnum
    </Spinner>
          
        </Button> */}
        <Button color="gray" onClick={() => dispatch(addnum())} disabled variant="outline">
          <Spinner loading>
            <BookmarkIcon />
          </Spinner>
          Bookmark
        </Button>
        {/* <button
          onClick={() => dispatch(addnum())}
          className="border-2 border-cyan-400 py-3 px-4"
        >
          addnum
        </button> */}
        <button
          onClick={() => dispatch(subnum())}
          className="border-2 border-cyan-400 py-3 px-4"
        >
          subnum
        </button>
        <button
          onClick={() => dispatch(addbynum(5))}
          className="border-2 border-cyan-400 py-3 px-4"
        >
          addbynum by 5
        </button>
      </div>
    </>
  );
};

export default Page;
