import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import {Card} from 'react-bootstrap'


const EditStudent = ({studentData, updation}) => {

    const [formData, setFormData] = useState({})

    useEffect(() => {
        setFormData(studentData)
    },[studentData])


    const changeInput = (event) => {
        let key = event.target.name
        let value = event.target.value
      //  setFormData({...formData, [key]:value})
    }

    const submitForm = async (event) => {
        event.preventDefault()
        console.log(formData)
        console.log(studentData);
        axios.put(`http://localhost:8081/ranjith/students/${formData.id}`, formData).
            then((res) => {
                console.log(res)
                updation('User Updated Successfully')
            })
        
        
    }
    
    
    return (
        <>
            <div style={{ marginLeft: '300px', marginRight: '300px', marginTop: '25px', marginBottom: '25px' }}>
                
                <Card>
                    <Card.Header className="text-center">
                        <h3>Edit Record Id:{formData.id} </h3>            
                    </Card.Header>
                <Card.Body>
                    <form>
                        <div className="form-group">
                            <label>FirstName</label>
                            <input className="form-control" value={formData.firstName} name="firstName" onChange={changeInput} />
                        </div>
                        <div className="form-group">
                            <label>LastName</label>
                            <input className="form-control" value={formData.lastName} name="lastName" onChange={changeInput} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" value={formData.email} name="email" onChange={changeInput} />
                        </div>
                        <div className="form-group">
                            <label>Course</label>
                            <input className="form-control" value={formData.course} name="course" onChange={changeInput} />
                        </div><br/>
                        <div className="form-group">
                            <button className="btn btn-info" onClick={submitForm}>Update</button>
                        </div>
                    </form>
                </Card.Body>
                </Card>
                
            </div>    
        </>
    )
}

export default EditStudent