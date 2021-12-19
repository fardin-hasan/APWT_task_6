import React, { useState } from 'react';
import { useParams } from 'react-router';
import NavBar from './NavBar';
import StudentData from './StudentData';

const StudentDetails = () => {

    const { id } = useParams();
    const [students, setStudents] = useState(StudentData);
    console.log(setStudents);
    console.log(id);
    const selectedStudent = students.find(students => students.id = id);
    return (
        <div>
            <NavBar />
            <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh',  }}>
                <div style={{ boxShadow:"5px 5px 5px  rgb(105, 200, 200)", padding: "40px", borderRadius: "10px", background:" rgb(190, 200, 190)" }}>
                    <h3>Student Details</h3>
                    <hr></hr>
                    <h5>Name: {selectedStudent?.name}</h5>
                    <h5>Id: {selectedStudent?.studentId}</h5>
                    <h5> Department: {selectedStudent?.department}</h5>
                    <h5>CGPA: {selectedStudent?.cgpa}</h5>
                    <h5>  Address: {selectedStudent?.address}</h5>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;