import {useState} from "react";

function MyForm(){
    const [inputs,setInputs]=useState({});
const handleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInputs(values=>({...values,[name]:value}))
}
const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(inputs);
    console.log(event)
}
return(
    <form className="text-center" style={{marginTop:'120px'}}
    onSubmit={handleSubmit}>
        <label>Enter your First Name:</label>
        <input type="text" name="firstname" value={inputs.firstname||""} onChange={handleChange}/><br></br>
        <label>Enter your Last Name:</label>
        <input type="text" name="secondname" value={inputs.secondname||""} onChange={handleChange}/><br></br>
        <label>Enter your Age:</label>
        <input type="number" name="age" value={inputs.age||""} onChange={handleChange}/><br></br>
        <input type="submit" value="submit"></input>
    </form>
);
}
export default MyForm;