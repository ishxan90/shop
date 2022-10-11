import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";


function HomeWrapper({search, setSearch}) {
    return(
            <>
                <Header/>
                <Navbar search={search} setSearch={setSearch} />
                <Outlet/>
                <Footer/>
            </>
    )
    
}

export default HomeWrapper