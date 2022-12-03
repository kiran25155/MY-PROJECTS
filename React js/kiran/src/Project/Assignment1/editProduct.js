import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import {Card} from 'react-bootstrap'
const EditProduct = ({prodtData,updation}) => {
const [inputs,setInputs] = useState({})


useEffect(() => {
 setInputs(prodtData)
}, [prodtData])

const onChange=(event)=>{
    let key=event.target.name
    let value=event.target.value
    setInputs({...inputs,[key]:value})
}
const onSubmit=async (event)=>{
    event.preventDefault()
    console.log(inputs)
    axios.put(`http://localhost:8086/update/${inputs.country}`,inputs)
     .then((res)=>{
         console.log(res.data)
        updation('product updated Successfully')
     })
    
     
}

  return (
    <>
     <Card>
                    <Card.Header className="text-center">
                        <h3>Edit Record country:{inputs.country} </h3>            
                    </Card.Header>
                <Card.Body>
<form style={{marginLeft:"500px",marginRight:"500px",marginTop:"50px"}}>
  <center>  <h1 >Edit Product</h1></center>
<div className="form-group">
    <label><h5>Country</h5></label>
<select className="form-control" value={inputs.country} name="country" onChange={onChange} >
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
<select className="form-control" name="itemType" onChange={onChange} value={inputs.itemType}>
      <option value="">Select</option>
    <option value="Baby Food">Baby Food</option>
    <option value="Cereal">Cereal</option>
    <option value="Office Supplies">Office Supplies</option>
    <option value="Fruits">Fruits</option>
    <option value="Household">Household</option>
    <option value="Vegetables">Vegetables</option>
    <option value="Personal Care">Personal Care</option>
    <option value="Clothes">Clothes</option>
</select></h5>
</div>
<div className="form-control" value={inputs.sales}><h5>
    <label >Sales Channel :
    <input type="radio"  onChange={onChange} name="sales"  value={inputs.sales}/>Offline</label>
   <label> <input type="radio" onChange={onChange} name="sales"  value={inputs.sales}/>Online </label>
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
    <input type="number" className="form-control" onChange={onChange} name="orderId" value={inputs.orderId} />
    
</div>
<div className="form-group">
    <label><h5>Units Sold</h5></label>
    <input type="number" className="form-control" onChange={onChange} value={inputs.unitSold} name="unitSold" />
</div>
<div className="form-group">
    <label><h5>Unit Price</h5></label>
    <input type="number" className="form-control"onChange={onChange}  value={inputs.unitPrice} name="unitPrice" />
</div>
<div className="form-group">
    <label><h5>Unit cost</h5></label>
  <h5>  <input type="number" className="form-control" onChange={onChange} value={inputs.unitCost} name="unitCost" /></h5>
</div>

<div className="form-group">
<button className="btn btn-success" onClick={onSubmit} > Submit</button>
</div>
</form>
</Card.Body>
</Card>
</>
  );
}

export default EditProduct;
