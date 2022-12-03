import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Dashboard from "./dashboard";

const Body=()=>{
return(
    <>
    <div style={{marginTop:"100px"}}></div>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="dashbord" element={<Dashboard/>}></Route>
    </Routes>
    </>
);
    

}
export default Body;