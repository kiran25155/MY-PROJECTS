import React from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./productDetails";
import ProductForm from "./productForm";
import { Route,Routes } from "react-router-dom";
const Product=()=>{

    return(
        <>
        
        <div className="row" style={{marginTop:"50px"}}>
            
<div className="col-md-3"> </div>
<div className="col-md-3">
    <Link to="/"><h4>ProductForm</h4></Link>
   
</div>
<div  className="col-md-3"></div>
<div className="col-md-3">
    <Link to="/productDetails"><h4>ProductDetails</h4></Link>
</div>
<div className="text-center">
<Routes>
  <Route path="/"  element={<ProductForm/>}></Route>
  <Route path="/productDetails"  element={<ProductDetails/>}></Route>
</Routes>
</div>

        </div>
        </>
    )
}
export default Product;