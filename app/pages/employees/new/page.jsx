'use client'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const page = () => {
    const router= useRouter();
    async function createEmployee (){
        const data={employeeName:EmployeeName,
            age:age,
            salary:salary
        }
        const response= await axios.post('/api/employees/',data)
        console.log(response)
        router.push('/pages/employees')
    }
    const [EmployeeName, setEmployeeName] = useState('') ;
    const [salary, setSalary] = useState(0) ;
    const [age, setAge] = useState(0) ;
  return (
    <div className='bg-white min-h-screen h-auto '>
           <form 
    onSubmit={(e)=>{
        e.preventDefault();
        createEmployee();
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
             className='cursor-pointer bg-purple-700 hover:bg-purple-800 rounded-md px-4 py-2' type='submit'>create</button>
        </div>
    </form> 

    </div>
  )
}

export default page