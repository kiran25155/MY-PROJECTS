import React,{useState} from 'react';
const [error,setError]=useState('')
const[isvalid,setIsValid]=useState(true)
const checkCon=()=>{
    
        {
          if (FormData.snum==0){
              setIsValid(false)
              setError("second number cann't be zero")
          } else{
              setIsValid(true)
              setError("Division:"+formData.firstNumber+" "+formData.secondNumber)
              
          } 

        }

}