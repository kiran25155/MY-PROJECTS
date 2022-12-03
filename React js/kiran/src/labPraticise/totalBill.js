import React,{useState} from "react";
import Output from "./Output";
const TotalBill=()=>{

    const [inputs,setInputs]=useState({})
    const[outputs,setOutputs]=useState('')
    const changeInput=(event)=>{
    const key=event.target.name;
    const values=parseInt(event.target.value);
    setInputs({...inputs,[key]:values})
}
const calculation=(event)=>{
    event.preventDefault()
    const result=`The Total bill : ${inputs.qty*inputs.cost}`
    setOutputs(result)
}
return(
    <>
<form style={{marginLeft:"400px",marginRight:"400px"}}>
<div className='form-group'>
    <label>Enter Item Number</label>
    <input type="number" onChange={changeInput} className="form-control" name="itemNum"></input>
    
</div>

<div className='form-group'>
    <label>Enter Item Name</label>
    <input type="text" onChange={changeInput} className="form-control" name="itemName"></input>
    
</div>

<div className='form-group'>
    <label>Enter Qty</label>
    <input type="number" onChange={changeInput} className="form-control" name="qty"></input>
    
</div>

<div className='form-group'>
    <label>Enter Cost</label>
    <input type="number" onChange={changeInput} className="form-control" name="cost"></input>
    
</div>
<div>
    <button className="text-center" onClick={calculation}>Calculate Total Bill</button>
</div>

</form>
<Output inputs={ outputs }/>
</>
)
}
export default TotalBill;