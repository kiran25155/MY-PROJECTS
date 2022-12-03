import React,{useState} from "react";
import Output from "../labPraticise/Output";
const Reverse=()=>{
    const [inputs,setInputs]=useState({})
    const [outputs,setOutputs]=useState('')

    const changeInputs=(event)=>{
        const key=event.target.name
        const value=parseInt(event.target.value)
        setInputs({...inputs,[key]:value})
    }
    const submit=(event)=>{
        event.preventDefault()
        let n=`${inputs.num}`;
        let r=0;
        let m=0;
        while(n!==0){
         r=n%10;
         m=m*10+r;
         n=Math.floor(n/10);
         }
          
        const result=`Reverse of the given Number:${m}`
        setOutputs(result)
    
    }
    return(
        <>
        <div className="text-center" style={{marginTop:"100px",marginRight:"400px",marginLeft:"400px"}}>
            <h1>Reverse</h1>
           <form>
            <div className="form-group">
                <label>Enter a Number:</label>
                <input type="number" className="form-control" onChange={changeInputs} name="num"></input>
                
            </div>
            <button type="submit" onClick={submit} className="btn btn-primary">REVERSE THE GIVEN NUMBER</button>
            </form>
        </div>
        <Output inputs={outputs}/>
        </>
    )
}
export  default Reverse;
