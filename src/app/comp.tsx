'use client'
import React from "react"
import { useAppSelector } from "./redux"

const Comp = ()=>{
    const count = useAppSelector(s => s.counter)
    return(
        <>
        <h1>count2 :{count} </h1>
        </>
    )
}

export default Comp