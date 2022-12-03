import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import Students from './student'
import Articles from './articles'
import StudentListPage from './studentlist'
import { useState } from 'react'

const DashboardForum = () => {

    const [reloadData, setReloadData] = useState(false)
    const success = (msg) => {
        if (msg !== '') {
            setReloadData(true)
            console.log(msg)
        }
    }

    return (
        <>
          <Tabs defaultActiveKey="students" id="tabs" >
                <Tab eventKey="students" title="Students">
                    <div className='text-center'>
                        <h3 style={{color: 'blue'}}>Student Admin Dashboard</h3>
                    </div>
                    <Tabs defaultActiveKey="studentForm" id="studentTabs">
                        <Tab eventKey="studentForm" title="Add Student">
                            <Students success={success }/>
                        </Tab>
                        <Tab eventKey="studentsList" title="Show Students">
                            <StudentListPage reloadData={reloadData}/>
                        </Tab>
                    </Tabs>
                </Tab>
            <Tab eventKey="articles" title="Articles">
                <Articles/>
            </Tab>
            </Tabs>                                                 
        </>
    )
}

export default DashboardForum