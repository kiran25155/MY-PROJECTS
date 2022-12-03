import React from"react"
import {Link} from "react-router-dom";
const Header=()=>{
    return(
        <>
        <div className="row">
        <div className="col-md-10">
            <h3>Sathya Technologies</h3>
            </div>
            <div className="col-md-1">
            <Link to="/">Home</Link>
            </div>
            <div className="col-md-1">
            <Link to="about">About</Link>
            </div>
            </div>
        </>
    )
}
export default Header;
