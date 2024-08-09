'use client'
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
const page = ({params}) => {
console.log(params.employeeID)
const [EmployeeName, setEmployeeName] = useState('') ;
const [salary, setSalary] = useState(0) ;
const [age, setAge] = useState(0) ;
const getEmployeeByID = async()=>{
    const res= await axios.get('/api/employees',{params: {employeeID:params.employeeID}})
    console.log(res.data.employeeName)
    setEmployeeName(res.data.employeeName);
    setAge(res.data.age);
    setSalary(res.data.salary);
}

const updateEmployee = async()=>{
    const data={employeeName:EmployeeName,
        age:age,
        salary:salary
    }
const res= await axios.put('/api/employees',data,{params:{employeeID:params.employeeID}})
router.push('/pages/employees')
}
useEffect(() => {
getEmployeeByID();

}, [])

    const router= useRouter();


  return (
    <div className='bg-white min-h-screen h-auto '>
           <form 
    onSubmit={(e)=>{
        e.preventDefault();
        updateEmployee();
    }}
    className='w-full h-auto flex flex-col gap-2 justify-start'>
        <h1>Add new Employee</h1>
        
        <div className='flex w-full flex-col gap-1 text-gray-400'>
        <label  htmlFor='Employee' >Employee name</label>
        <input 
        value={EmployeeName}
        onChange={e=>setEmployeeName(e.target.value)}
        type='text' id='employeeName' name='employeeName' required />
        </div>
        
        <div className='flex w-full flex-col gap-1 text-gray-400'>
        <label  htmlFor='salary' >salary</label>
        <input 
        value={salary}
        onChange={e=>setSalary(e.target.value)}
        type='number' id='salary' name='salary' required />
        </div>
        <div className='flex w-full flex-col gap-1 text-gray-400'>
        <label  htmlFor='age' >age</label>
        <input 
        value={age}
        onChange={e=>setAge(e.target.value)}
        type='number' id='age' name='age' required />
        </div>
   

        <div className='flex justify-center'>
            <button
             className='cursor-pointer bg-purple-700 hover:bg-purple-800 rounded-md px-4 py-2' type='submit'>save</button>
        </div>
    </form> 

    </div>
  )
}

export default page