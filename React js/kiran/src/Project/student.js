import React from "react"
import axios from "axios"
import { useState } from "react"
import {Card, Alert} from 'react-bootstrap'


const Students = ({success}) => {

    const [formData, setFormData] = useState({})
    const [message, setMessage] = useState('')

    const changeInput = (event) => {
        let key = event.target.name
        let value = event.target.value
        setFormData({...formData, [key]:value})
    }

    const showSuccess = () => {
        if (message !== '') {
            return (
                <Alert variant="success">
                    <Alert.Heading>{  message  }</Alert.Heading>
                </Alert>
            )
        }
    }

    const submitForm = async (event) => {
        event.preventDefault()
        console.log(formData)
        await axios.post("http://localhost:8081/ranjith/student", formData)
            .then((res) => {  
                setMessage('User Added Successfully');
                success('User Added Successfull')
             })
            .catch((error) => {console.error(error)})
        
    }

    return (
        <>
            <div style={{ marginLeft: '300px', marginRight: '300px', marginTop: '25px', marginBottom: '25px' }}>
                
                {
                    showSuccess()
                }
                
                <Card>
                    <Card.Header className="text-center">
                        <h3>Sign Up</h3>            
                    </Card.Header>
                <Card.Body>
                    <form>
                        <div className="form-group">
                            <label>FirstName</label>
                            <input className="form-control" name="firstName" onChange={changeInput} />
                        </div>
                        <div className="form-group">
                            <label>LastName</label>
                            <input className="form-control" name="lastName" onChange={changeInput} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" name="email" onChange={changeInput} />
                        </div>
                        <div className="form-group">
                            <label>Course</label>
                            <input className="form-control" name="course" onChange={changeInput} />
                        </div><br/>
                        <div className="form-group">
                            <button className="btn btn-success" onClick={submitForm}>Submit</button>
                        </div>
                    </form>
                </Card.Body>
                </Card>
                
            </div>
        </>
    )
}

export default Students