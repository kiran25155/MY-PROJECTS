import React,{useState} from "react"
import Output from "./Output"
const UserPass=()=>{
    const [inputs,setInputs]=useState({})
    const [outputs,setOutputs]=useState('')
    const [error,setError]=useState(true)
    
    const changeInputs=(event)=>{
        const key=event.target.name
        const value=event.target.value
        setInputs({...inputs,[key]:value})
        
         if(error===false && (inputs.phno.length<10)){
       
        setError(!error)
        
    }
    
        else if(inputs.phno.length>10){
            setError(false)
        }
        
        
    }
    const submit=(event)=>{
        event.preventDefault()
        const Age=parseInt(inputs.age);
       if((`${inputs.username}`==="undefined" || `${inputs.pwd}`==="undefined" ||  `${inputs.cnfpwd}`==="undefined")){
            alert("Please fill the forms")
        }
        else if(`${inputs.username}`===`${inputs.pwd}`)
{
    alert("user Name and Password need not same")
}
else if(`${inputs.pwd}`!==`${inputs.cnfpwd}`){
    alert("Password and  Confirm Password must be same")
}
else if(`${Age}`==="NaN"){
    alert("please enter age")
}
else if(inputs.phno.length>10){
    setError(!true)
    alert("mobile number should be ten digits only")
    
    
}

else{
    const result=`Your Registeration Successfully ${inputs.username}
    age:${Age}
    Phone Number:${inputs.phno.length} `
    setOutputs(result)
    setError(true)
}
}
return(
    <>
    <div className="text-center" style={{marginLeft:"400px",marginRight:"400px"}} >
        <form >
<div className="form-group">
<label>Enter Username</label>
<input name="username" onChange={changeInputs}  className="form-control"/>

</div>
<div>                          
<label>Enter Password</label>
<input name="pwd" onChange={changeInputs}  className="form-control"/>

</div>
<div>
<label>Confirm Password </label>
<input name="cnfpwd" onChange={changeInputs}  className="form-control"/>

</div>
<div>
<label>Enter Age </label>
<input name="age"  type="number" onChange={changeInputs}  className="form-control"/>

</div>
<div>
<label  style={{color:(error?"black":"red")}}>Enter phone number </label>
<input name="phno"  style={{color:(error?"black":"red") }}  type="number" max={10} onChange={changeInputs}  className="form-control"/>

</div>
<div >
    <input type="submit" onClick={submit} className="btn btn-primary"/>
</div>
        </form>
    </div>
    <Output inputs={outputs}/>
    </>
   
)
    
}
export default UserPass;