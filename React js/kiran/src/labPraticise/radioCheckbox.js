import React,{useState} from "react";
import Output from "./Output";
const RadioCheckbox=()=>{
const [inputs,setInputs]=useState({})
const [outputs,setOutputs]=useState('')
const changeInputs=(event)=>{
    const key=event.target.name
    const value=event.target.value
    setInputs({...inputs,[key]:value})
}

const submit=(event)=>{
 event.preventDefault()
 const result=`Customer Name:${inputs.cName}
 Room Type:${inputs.Rooms}
 Aminities:${inputs.Aminities}`;
 setOutputs(result)
}
return(
    <>
    <div className="text-center" style={{marginTop:'70px'}}><h1>SUPER DELUXE LODEGE</h1></div>
    <form style={{marginLeft:'400px',marginRight:'400px',marginBottom:'250px',marginTop:'70px'}}>
<div className="form-group">
    <label>Enter Customer Name:</label>
    <input className="form-control" onChange={changeInputs}  name='cName'/>
</div>

<div className="form-group">
          <label>
            <input type="radio" onChange={changeInputs} name="Rooms" value="ORDINARY ROOMS"  />
            ORDINARY ROOMS
          </label>
          
          <label>
            <input type="radio" onChange={changeInputs} name="Rooms" value="DELUXER ROOM" />
            DELUXER ROOM
          </label>
          </div>


<div className="form-group">
    <label>Select Aminities:</label>
    <label>
            <input type="checkbox" onChange={changeInputs} name="Aminities" value="AC"  />
            AC
          </label>
          
          <label>
            <input type="checkbox" onChange={changeInputs} name="Aminities" value="Computer" />
            Computer
          </label>
</div>
<div className="text-center">
<button  onClick={submit} className="btn btn-primary">ClickMe</button>
</div>
    </form>
    <Output inputs={outputs}/>
    </>
)

}
export default RadioCheckbox;