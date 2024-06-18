"use client";

import { Button } from "@nextui-org/button";
import Comp from "./comp";
import { useAppDispatch, useAppSelector } from "./redux";
import { decrement, increment } from "./redux/slice";
import {Snippet} from "@nextui-org/snippet";
import "@radix-ui/themes/styles.css";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import {Spinner} from "@nextui-org/spinner";
import {Switch} from "@nextui-org/switch";
import {Tooltip} from "@nextui-org/tooltip";
export default function Home() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <h1>count : {count}</h1>
      <Comp />
      <button
        className="border-[2px] border-white px-6 py-3"
        onClick={() => dispatch(increment())}
      >
        addd
      </button>
      <button
        className="border-[2px] border-white px-6 py-3"
        onClick={() => dispatch(decrement())}
      >
        subbb
      </button>
      <Spinner />
      <Switch defaultSelected color="warning">Warning</Switch>
      <Snippet size="sm">7814833441</Snippet>
      <Snippet size="md">npm install @nextui-org/react</Snippet>
      <Snippet size="lg">npm install @nextui-org/react</Snippet>
      <Button color="warning">Warning</Button>
      <Tooltip content="I am a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          perferendis ad molestiae sit excepturi incidunt, quibusdam non
          laboriosam est consequuntur dolore dicta modi iusto totam odio beatae
          ex praesentium sed ratione ipsum sint porro deserunt. Quibusdam est
          corporis aut iusto, aperiam provident minus, reiciendis esse doloribus
          eius illo sequi alias.
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          perferendis ad molestiae sit excepturi incidunt, quibusdam non
          laboriosam est consequuntur dolore dicta modi iusto totam odio beatae
          ex praesentium sed ratione ipsum sint porro deserunt. Quibusdam est
          corporis aut iusto, aperiam provident minus, reiciendis esse doloribus
          eius illo sequi alias.
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          perferendis ad molestiae sit excepturi incidunt, quibusdam non
          laboriosam est consequuntur dolore dicta modi iusto totam odio beatae
          ex praesentium sed ratione ipsum sint porro deserunt. Quibusdam est
          corporis aut iusto, aperiam provident minus, reiciendis esse doloribus
          eius illo sequi alias.
        </AccordionItem>
      </Accordion>
    </>
  );
}
