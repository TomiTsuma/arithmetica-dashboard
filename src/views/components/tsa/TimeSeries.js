'use client';


import React, { useRef, useEffect } from "react";
import LineGraph from "../visualizations/line";


//chart component
export default function TimeSeries (){
  const series = [
    [
      { date: new Date(2017, 3, 1), value: 1 },
      { date: new Date(2017, 4, 1), value: 2 },
      { date: new Date(2017, 5, 1), value: 6 },
    ],
    [
      { date: new Date(2017, 3, 1), value: 4},
      { date: new Date(2017, 4, 1), value: 4},
      { date: new Date(2017, 5, 1), value: 0},
    ]
  ]
  return (
    
      <LineGraph
      data= {series}></LineGraph>
    
  );
};

