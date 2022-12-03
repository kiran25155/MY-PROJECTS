import axios from "axios";
import React from "react";
import { useState } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";

const ProductForm=()=>{
    const [inputs,setInputs]=useState({})
     const onChange=(event)=>{
         let key=event.target.name;
         let value=event.target.value;
         setInputs({...inputs,[key]:value});
       
     }
     
        
      
     const submit= async (event) => {
        event.preventDefault()
        console.log(inputs);
   
        if(`${inputs.country}`==="undefined" || `${inputs.itemType}`==="undefined"  || `${inputs.sales}`==="undefined"  || `${inputs.orderPriority}`==="Undefined"  ||  `${inputs.orderId}`==="undefined"
    || `${inputs.unitSold}`==="undefined" ||  `${inputs.unitPrice}`==="undefined" || `${inputs.unitCost}`==="undefined" ){
            alert("All fields are required to fill");
        }
        else{
            alert("Product Details Added Successfully");
            <ProductForm/>
        }

        axios({
  
            // Endpoint to send files
            url: "http://localhost:8086/insert",
            method: "POST",
            headers: {
        
              // Add any auth token here
              authorization: "your token comes here",
            },
        
            // Attaching the form data
            data: inputs,
          })
        
            // Handle the response from backend here
            .then((res) => { })
        
            // Catch errors if any
            .catch((err) => { });
            window.location.reload(false);
        }

        
     
        
    
return(
    <><h6>
<form style={{marginLeft:"500px",marginRight:"500px",marginTop:"50px"}}>
  <center>  <h1 >Product Form</h1></center>
<div className="form-group">
    <label><h5>Country</h5></label>
<select className="form-control" name="country" onChange={onChange} value={inputs.name}>
    <option value="">Select</option>
    <option value="Tuvalu">Tuvalu</option>
    <option value="Grenada">Grenada</option>
    <option value="Russia">Russia</option>
    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
    <option value="Rwanda">Rwanda</option>
    <option value="Solomon Islands">Solomon Islands</option>
    <option value="Angola">Angola</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Republic of the Congo">Republic of the Congo</option>
    <option value="Senegal">Senegal</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Cape Verde">Cape Verde</option>
    <option value="Bangladesh">Bangladesh</option>
</select>
</div>
<div className="form-group"><h5>
    <label>Items</label>
<select className="form-control" name="itemType" onChange={onChange} value={inputs.name}>
      <option value="">Select</option>
    <option value="Baby Food">Baby Food</option>
    <option value="Cereal">Cereal</option>
    <option value="Office Supplies">Office Supplies</option>
    <option value="Fruits">Fruits</option>
    <option value="Household">Household</option>
    <option value="Vegetables">Vegetables</option>
    <option value="Personal Care">Personal Care</option>
    <option value="Clothes">Clothes</option>
</select>
</h5>
</div>
<div className="form-control"><h5>
    <label>Sales Channel :
    <input type="radio"  onChange={onChange} name="sales" value="Offline"/>Offline</label>
   <label> <input type="radio" onChange={onChange} name="sales" value="Online"/>Online </label>
   </h5>
</div>
<div className="form-control">
<h5>
    <label>Order Priority :
    <input type="radio"  onChange={onChange} name="orderPriority" value="H"/>H</label>
   <label> <input type="radio" onChange={onChange} name="orderPriority" value="M"/>M</label>
   <label> <input type="radio"   onChange={onChange} name="orderPriority" value="C"/>C</label>
   <label> <input type="radio"   onChange={onChange} name="orderPriority" value="L"/>L</label>
   </h5>
</div>
<div className="form-group">

    <label><h5>Order Id</h5></label>
    <input type="number" className="form-control" onChange={onChange} name="orderId" />
    
</div>
<div className="form-group">
    <label><h5>Units Sold</h5></label>
    <input type="number" className="form-control" onChange={onChange} name="unitSold" />
</div>
<div className="form-group">
    <label><h5>Unit Price</h5></label>
    <input type="number" className="form-control"onChange={onChange}  name="unitPrice" />
</div>
<div className="form-group">
    <label><h5>Unit cost</h5></label>
  <h5>  <input type="number" className="form-control" onChange={onChange} name="unitCost" /></h5>
</div>

<div className="form-group">
<button className="btn btn-success" onClick={submit} > Submit</button>
</div>
</form>
</h6>
</>

);
}
export default ProductForm;