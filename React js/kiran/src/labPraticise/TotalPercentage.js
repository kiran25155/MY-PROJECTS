import React, {useState} from 'react'
import Output from './Output'
const TotalPercentage=()=>
{
const [inputs,setInputs]=useState({})
const [outputs,setOutputs]=useState('')

const changeInput=(event)=>{
    const key=event.target.name
    const value=event.target.value
    setInputs({...inputs,[key]:value})
}

const total=()=>{
const int=parseInt(inputs.stdM1 )+ parseInt(inputs.stdM2) + parseInt(inputs.stdM3)
return int
}
const percentage=(event)=>{
    event.preventDefault()
    
const result=`Student Name:${inputs.stdName}
Total: ${total()}   Percentage:${((total()/300).toFixed(2))*100 }%`;
setOutputs(result)

}
return(
    <>
    <form style={{marginLeft:"400px",marginRight:"400px"}}>
        <div className="form-group">
            <label>Enter Student No:</label>
<input type='number' name='stdNo' className="form-control" onChange={changeInput}></input>
</div>

<div className="form-group">
            <label>Enter Student Name:</label>
<input  name='stdName' className="form-control" onChange={changeInput}></input>
</div>

<div className="form-group">
            <label>Enter Marks1:</label>
<input type='number' name='stdM1' className="form-control" onChange={changeInput}></input>
</div>

<div className="form-group">
            <label>Enter Marks2:</label>
<input type='number' name='stdM2' className="form-control" onChange={changeInput}></input>
</div>

<div className="form-group">
            <label>Enter Marks:</label>
<input type='number' name='stdM3' className="form-control" onChange={changeInput}></input>
</div>
<div className="text-center">
    <button className="btn btn-primary" onClick={percentage}>Calulcate </button>
</div>


        </form>


   
    <Output inputs={ outputs }/>
</>
);

}
export default TotalPercentage;