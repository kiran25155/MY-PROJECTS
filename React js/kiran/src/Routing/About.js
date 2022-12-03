import React from "react";
import { Link } from "react-router-dom";
const About=()=>{
    return(
        <>
    <div className="row">
    <div className="col-md-5">
            <Link to="/react" >ReactProg</Link>
            </div>
            <div className="col-md-7">
            <Link to="/angularProg">AngularProg</Link>
            </div>
    
        </div>
        </>
    );
}
export default About;