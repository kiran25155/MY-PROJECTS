import { useState } from "react";
const StateManagement=()=>{
    let [display,setDisplay]=useState(true);
    let[msg,setMsg]=useState("I'm from function based component");
    
       
    const changeState=()=>{
        setDisplay(!display)
        setMsg("I'm from state Management of function component")
    }
    return(
        <>
        <h1>{msg}</h1>
        <h1>{display?msg:"No info Avaliable"}</h1>
        <button onClick={changeState}>changeState</button>
        </>
    );
    
}
export default StateManagement;