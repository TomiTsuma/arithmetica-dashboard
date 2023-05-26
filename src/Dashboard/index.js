import { Route, Routes, BrowserRouter } from "react-router-dom"
import Financials from "./FinancialAnalytics/screens/financialsPage"
import SideNav from "@/components/side-nav"
import DataSources from "./DataSources/screens/dataSources"
import CustomerAnalytics from "./CustomerAnalytics/screens/customerAnalytics"
import Forecasting from "./Forecasting/screens/forecasting"

export default function Dashboard(){
    return(
        <BrowserRouter>
        <SideNav></SideNav>
            <Routes>
                <Route path='/'>
                    <Route index element={<Forecasting/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}