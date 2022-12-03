import React,{useState} from "react";

const Form=()=>{
    const [inputs,setInputs]=useState({});
    //const [outputs,setOutputs]=useState('');

    const ChangeInputs=(event)=>{
        const key=event.target.name;
        const value=event.target.value;
        setInputs({...inputs,[key]:value})
    }
      
     const Submit=(event)=>
     {
        event.preventDefault()
         let Name=inputs.name;
         let names=Name.split('');
         let nam=[];
         
             nam=names.map(item=>item);
            
         
         let Email=inputs.email;
         let Mobile_Number=(inputs.number);
         let mob=Mobile_Number.split('');
        
       
        const result=(`Name: ${inputs.name}
                      Email:${inputs.email}
                    Mobile_Number:${parseInt(inputs.number)}
                    mob:${mob[0]}
                    ${nam}`
        );
        for(let i=0; i<=nam.length-1; i++){
            nam[i]=(((nam>='A')&&(nam<='Z')) ||((nam>='a')&&(nam<='z')) );
            if(nam[i]==="false"){
                alert("Name should be alphabets only");

            }
        }
    

    
    
            if(Mobile_Number.length<10 ){
alert("Mobile number should be 10 Digits");
            }
             if((mob[0]>='0')&&(mob[0]<='6')){
                alert("Mobile number should not be start with 0/1/2/3/4/5/6");   
            }
            
  else{
      console.log(result);
    }
       
}
     

    return(

        <>
        <div className="text-center"style={{marginLeft:"400px",marginRight:"400px",marginTop:"200px"}}>
            
            <form onSubmit={Submit}>

       <div className="form-group" >
           <label>Name : </label>
           <input name="name" onChange={ChangeInputs}  className="form-control"/>
       </div>

       <div className="form-group">
           <label>Email : </label>
           <input type="email" name="email" onChange={ChangeInputs}  className="form-control"/>
       </div>

       <div className="form-group">
           <label>Mobile Number : </label>
           <input type="number" name="number" onChange={ChangeInputs}  className="form-control"/>
       </div>
            <button className="btn btn-primary"  >Submit</button>
       </form>
        </div>
        </>

    ) 
}
export default Form;