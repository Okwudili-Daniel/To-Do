import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Dashboardhead from "../static/Dashboardhead";
import Sidebar from "../static/Sidebar";


const Layout = () =>{
    return(
        <div>
            <Dashboardhead/>
            <Holder>
            <Sidebar/>
            <Outlet/>
            </Holder>
        </div>
    )
}

export default Layout;
const Holder = styled.div`
    display: flex;
    height: calc(100vh - 60px);
`