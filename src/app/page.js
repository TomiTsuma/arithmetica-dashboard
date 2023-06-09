'use client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "@/components/side-nav";
import Financials from "@/Dashboard/FinancialAnalytics/screens/financialsPage";
import DataSources from "@/Dashboard/DataSources/screens/dataSources";


export default function Home() {
  return(
    <BrowserRouter>
    <SideNav></SideNav>
        <Routes>
            <Route path='/'>
                <Route index element={<Financials/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
}

