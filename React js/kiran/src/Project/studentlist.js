import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import EditStudent from "./editComponent"
import { Alert } from "react-bootstrap"

const StudentListPage = ({reloadData}) => {

    const [students, setStudents] = useState([{}])
    const [studentData, setStudentData] = useState({})
    const [showEdit, setShowEdit] = useState(false)
    const [message, setMessage] = useState('')

    const updation = (msg) => {
        if (msg !== '') {
            setShowEdit(false)
            getStudents()
            setMessage(msg)
        }
    }

    const showUpdateStatus = () => {
        if (message !== '') {
            return (
                <Alert variant="success">
                    <Alert.Heading>{ message }</Alert.Heading>
                </Alert>
            )
        }
    }

    const getStudents = async () => {
        await axios.get('http://localhost:8081/ranjith/students')
            .then((res) => {
                setStudents(res.data)
                console.log(res.data)
            })
    }

    const editRecord = (student) => {
        setStudentData(student)
        setShowEdit(true)
    }

    const enableEdit = () => {
        if (showEdit) {
            return (
                <EditStudent updation={updation} studentData={studentData}/>
            )
        }
    }

   useEffect(() => {
        if (reloadData) {
            
            getStudents()
        }
    }, [reloadData])

    const deleteRecord = async(id) => {
        await axios.delete(`http://localhost:8081/ranjith/students/${id}`)
            .then((res) => {
                console.log(res)
                getStudents()
                })
    }

    useEffect(() => {
        getStudents()
    }, [])


    return (
        <>
            {
                showUpdateStatus()
            }
            <div className="row">
                <p>List of Students</p>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Student FirstName</th>
                            <th>Student LastName</th>
                            <th>Email</th>
                            <th>Course</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(student => 
                                <tr key="{student.id}">
                                    <td>{student.id}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{ student.email }</td>
                                    <td>{student.course}</td>
                                    <td>
                                            <button onClick={()=>editRecord(student)} className="btn btn-info">Edit</button> &nbsp;       
                                            <button onClick={()=>deleteRecord(student.id)} className="btn btn-danger">Delete</button>        
                                    </td>    
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
            {
                enableEdit()
            }
        </>
    )
}

export default StudentListPage