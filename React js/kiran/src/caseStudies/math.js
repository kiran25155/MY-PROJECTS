import React, { useState } from 'react'
import Output from './output'

const Math = () => {
    const [formData, setFormData] = useState({})
    const [output, setOutput] = useState('')
    const [isValid,setIsValid]=useState(true)
    const [error,setError]=useState('')
    const changeInput = (event) => {
        const key = event.target.name
        const value = parseInt(event.target.value)
        setFormData({...formData, [key]: value})
    }

    const add = (event) => {
        event.preventDefault()
        const result = `The result of addition is: ${formData.firstNumber + formData.lastNumber}`
        setOutput(result)
    }
    const div = (event) => {
        event.preventDefault()
        if (`${formData.firstNumber / formData.lastNumber}`==Infinity){
        setIsValid(false)
        setError('Second number cannot be Zero for Division operation value')
        }
        else{
          setIsValid(true)  
        const result = `The result of Division is: ${formData.firstNumber / formData.lastNumber}`
        setOutput(result)
        }
    }

    const mul = (event) => {
        event.preventDefault()
        const result = `The result of Multiplication is: ${formData.firstNumber * formData.lastNumber}`
        setOutput(result)
    }

    const sub = (event) => {
        event.preventDefault()
        const result = `The result of Subtraction is: ${formData.firstNumber - formData.lastNumber}`
        setOutput(result)

    }

    const inValid=()=>{
        if(!isValid){
        return(
            <div className='text-center' style={{color:'red',boarder:'1px solid red',marginLeft:"400px",marginRight:"400px"}}>
                <h4>{error}</h4>
            </div>
        )
    }
    }
    return (
        <React.Fragment>
            
           
            <div style={{marginTop : '150px'}}>
                {
                    inValid()
                }
                <h3 className='text-center'>Sign Up</h3>
                <form noValidate     style={{marginLeft: '400px', marginRight: '400px'}}>
                    <div className='form-group'>
                        <label htmlFor='firstNumber'>FirstNumber: </label>
                        <input required onChange={changeInput} type='number' className='form-control' name="firstNumber" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lastNumber'>Second Number: </label>
                        <input requried onChange={changeInput} type='number' className='form-control' name="lastNumber" />
                    </div><br/>
                    <div className='text-center form-group row'>
                        <div className='col-md-6'>
                            <button onClick={add} className='btn btn-success'>Addition</button>
                        </div>
                        <div className='col-md-6'>
                            <button className='btn btn-danger' onClick={div}>Division</button>
                        </div>
                        
                        
                    </div><br/>
                    <div className='text-center form-group row'>
                        <div className='col-md-6'>
                            <button className='btn btn-primary' onClick={mul}>Multiplication</button>
                        </div>
                        <div className='col-md-6'>
                            <button className='btn btn-info' onClick={sub}>Substraction</button>
                        </div>
                    </div>
                    
                </form>
                <Output formData={ output }/>
                
            </div>
            
        </React.Fragment>
    )
}
export default Math; 
