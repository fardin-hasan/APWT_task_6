import React, { useState } from 'react';
import NavBar from './NavBar';
import StudentCard from './StudentCard';
import StudentData from './StudentData';

const StudentList = () => {
    const [students, setStudents] = useState(StudentData);
    console.log(setStudents);
    return (
        <div className="container">
            <NavBar />
            
            <center><h1><br></br>Student Information</h1></center>
            <div className="row">
            {
                    students.map(students => <StudentCard studentDetails={students}></StudentCard>)
                }
            </div>
               
              
               
            

        </div>
    );
};

export default StudentList;