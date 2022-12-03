import React,{useState} from "react";
import Output from "./output"
const Form=()=>{
    const [formData,setFromData]=useState({})
    const[output,setOutput]=useState('')
    
    const [error, setError] = useState('')
    const [isValid, setIsValid] = useState(true)
    

    const changeInput=(event)=>{
        const key=event.target.name
        const value=event.target.value
        setFromData({...formData,[key]:value})
    }
    const submit = (event) => {
        event.preventDefault()
        
        if (formData.fname === undefined) {
            setIsValid(false)
            setError('FirstName is Required Field')
        }
       else if (formData.lname === undefined) {
            setIsValid(false)
            setError('LastName is Required Field')
        }
      else {
            setIsValid(true) 
            
            const result = "FullName: " + formData.fname + " " + formData.lname
            setOutput(result)    
        
    }
}
    const invalid = () => {
        if (!isValid) {
            return (
                <div className='text-center' style={{color:'red', border: '1px solid red', marginLeft: '400px', marginRight: '400px'}}>
                    <h5>{ error }</h5>
                </div>
            )
        }
    }
    

    return(
        <>
        <div style={{ marginTop: '50px' }}>
            <div>
                {
                    invalid()
                }
           
               
                <h3 className='text-center'>Sign Up</h3>
                <form   style={{marginLeft: '400px', marginRight: '400px'}}>
                    <div className='form-group'>
                        <label htmlFor='lname'>FirstName: </label>
                        <input  onChange={changeInput}  required className='form-control'  name="fname" />
                    </div>
                    <div className='form-group'>
                    <label htmlFor='fname'>Last Name: </label>
                        <input  required onChange={changeInput} className='form-control' name="lname" />
                    </div><br/>
                    <div className='text-center form-group'>
                        <button  onClick={submit} className='btn btn-info'>Submit</button>
                    </div>
                </form>
                <Output formData={ output }/>
                </div>
                </div>
        </>
    )
    }

    export default Form