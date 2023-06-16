'use client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "@/components/side-nav";
import Financials from "@/Dashboard/FinancialAnalytics/screens/financialsPage";
import DataSources from "@/Dashboard/DataSources/screens/dataSources";
import Forecasting from "@/Dashboard/Forecasting/screens/forecasting";
import TransactionAnalytics from "@/Dashboard/TransactionAnalytics/screens/transactionAnalytics";
import CustomerAnalytics from "@/Dashboard/CustomerAnalytics/screens/customerAnalytics";


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

