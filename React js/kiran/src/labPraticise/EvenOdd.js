import React,{useState} from "react";
import Output from "./Output";
const EvenOdd=()=>{
    const [inputs,setInputs]=useState({})
    const [outputs,setOutputs]=useState('')

    const changeInput=(event)=>{
        const key= event.target.name
        const value=parseInt(event.target.value)
        setInputs({...inputs,[key]:value})
    }

    const submit=(event)=>{
event.preventDefault()
if(`${inputs.num}`%2===0){
    setOutputs(`${inputs.num} is Even Number`)
    }
    else{
        setOutputs(`${inputs.num} is Odd Number`)
    }
}
return(    
    <>
    <div className="text-center">
        <form>
            <label>Enter a Value</label>
            <input type="number"  onChange={changeInput} name="num"></input>
            <button onClick={submit} className="btn btn-primary">Check Even Or Odd</button>
        </form>
<Output inputs={outputs}/>
    </div>
    </>
)
}
export default EvenOdd;