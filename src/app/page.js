'use client'
import { createRoot } from "react-dom/client";
import pageStyles from './page.module.css'
import {LandingPage} from '@/Landing/index.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@/Dashboard";
import SideNav from "@/components/side-nav";


export default function Home() {
  return(
    <Dashboard></Dashboard>
  )
}

