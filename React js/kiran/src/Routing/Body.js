import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Routing/Home"
import About  from "./About";
import ReactProg from "./ReactJs";
import AngularProg from "./AngularJs";


const Body=()=>{
    return(
     <React.Fragment>
        <div className="text-center">
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/react' element={<ReactProg/>}></Route>
                <Route path='/angularprog' element={<AngularProg/>}></Route>
            </Routes>
         </div>
     </React.Fragment>
    );
} 
export default Body;
