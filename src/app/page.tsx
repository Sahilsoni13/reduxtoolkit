'use client'
import Comp from "./comp";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { decrement, increment } from "./redux/slices/counter";

export default function Home() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch()
  return (
<>
<h1>count : {count}</h1>
<Comp/>
<button className="border-[2px] border-white px-6 py-3" onClick={()=>dispatch(increment())}>addd</button>
<button className="border-[2px] border-white px-6 py-3" onClick={()=>dispatch(decrement())}>subbb</button>
</>
  );
}
