import React from 'react'
import { Link } from 'react-router-dom'

const Header=()=>{
    return(
        <>
        <div className='row' style={{ backgroundColor:"black" }}>
            <div className='col-md-6'>
                <h2 style={{ color:"orange" }}>Sathya Technologies</h2>

            </div>
            <div className='col-md-6'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className="col-md-2"><Link to="/"> <button  className='btn btn-primary'>Home</button></Link></div>
                <div className="col-md-2"><Link to="about"><button className='btn btn-info'>About</button></Link></div>
                <div className="col-md-2"><Link to="dashbord"><button className='btn btn-success'>Dashbord</button></Link></div>

            </div>
</div>
        
</div>
        </>
    );
}
export default Header;
