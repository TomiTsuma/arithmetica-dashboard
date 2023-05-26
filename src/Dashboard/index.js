import { Route, Routes, BrowserRouter } from "react-router-dom"
import Financials from "./FinancialAnalytics/screens/financialsPage"
import SideNav from "@/components/side-nav"

export default function Dashboard(){
    return(
        <BrowserRouter>
        <SideNav></SideNav>
            <Routes>
                <Route path='/'>
                    <Route index element={<Financials></Financials>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}