import React,{useState} from "react";
import Output from "./Output";
const ElectricsBill=()=>{
    const [inputs,setInputs]=useState({})
    const[outputs,setOutputs]=useState('')
    const changeInputs=(event)=>{
        const key=event.target.name
        const value=event.target.value
        setInputs({...inputs,[key]:value})

    }
    const submit=(event)=>
    {
      event.preventDefault()
        const srno=parseInt(inputs.startRD);
        const erno=parseInt(inputs.endRD);
        const slab=inputs.slab;
        const units =srno-erno;
        let rate=0;
        let total=0;
       
        if(slab==="Industry"){
          total=units*5;
          rate=5;
        }
        else if(slab==="Commerical"){
            total=units*4;
            rate=4;
          }
        else {
            total=units*3;
            rate=3;
        }
          const result=`Customer Name:${inputs.name}

          The Number of Units: ${units}
          
          rate per unit :${rate}
            
          Total Bill: ${total}`;
          setOutputs(result);
    }
    return(
        <>
        <div className="text-center" style={{marginLeft:"400px",marginRight:"400px"}}>
         <form>
             <div className="from-goup">
                 <label>Enter Customer Name:</label>
                 <input type="text" onChange={changeInputs} name="name" className="form-control"></input> 
             </div>

             <div className="from-goup">
                 <label>Enter Starting Reading Number:</label>
                 <input name="startRD" type="number" onChange={changeInputs} className="form-control"></input> 
             </div>

             <div className="from-goup">
                 <label>Enter Ending Reading Number:</label>
                 <input name="endRD" type="number" onChange={changeInputs} className="form-control"></input> 
             </div>

             <div className="form-group">
                <label>Select Slab Type:</label> 
                <label><input type="radio" name="slab"  value="Industry" onChange={changeInputs}/>Industry</label> 
                <label><input type="radio" name="slab"  value="Commerical" onChange={changeInputs}/>Commerical</label> 
                <label><input type="radio" name="slab"  value="Residence" onChange={changeInputs}/>Residence</label> 
             </div>
             
             
<button className="btn btn-primary" type="submit" onClick={submit}>Calucation</button>

             </form>  

        </div>
        <Output inputs={outputs}/>
        </>
    );
}
export default ElectricsBill;