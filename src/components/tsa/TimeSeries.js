'use client';


import React, { useRef, useEffect } from "react";
import LineGraph from "../visualizations/line";


//chart component
export default function TimeSeries ({data}){

  return (
    
      <LineGraph
      data= {data}
      width={500}
      height={300}></LineGraph>
    
  );
};

