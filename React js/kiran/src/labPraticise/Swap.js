import React,{useState} from "react";
import Output from "./Output";
const Swap=()=>{
    const [inputs,setInputs]=useState({})
    const [outputs,setOutputs]=useState('')
    const changeInputs=(event)=>{
        const key=event.target.name
        const value=parseInt(event.target.value)
        setInputs({...inputs,[key]:value})
      }
      const submit=(event)=>{
        event.preventDefault()
        let t=0;
          let a=`${inputs.anum}`;
          let b=`${inputs.bnum}`;
          t=a;
          a=b;
          b=t;

         
          const result=`a value:${a}
          b Value:${b} `
          setOutputs(result)
      }
      return(
          <>
          <div className="text-center" style={{marginLeft:"400px",marginRight:"400px"}}>
              <h1>Is Positive Number</h1>
              <form>
                  <div className="form-group">
                      <label>Enter a Value</label>
                      <input type="number" required onChange={changeInputs} className="form-control" name="anum"></input>
                  </div>
                  <div className="form-group">
                      <label>Enter b Value</label>
                      <input type="number" required onChange={changeInputs} className="form-control" name="bnum"></input>
                  </div>
                  <button className="btn btn-info" onClick={submit}>Swap</button>
              </form>
              
          </div>
          <Output inputs={outputs}/>
          </>
      )
}
export default Swap;