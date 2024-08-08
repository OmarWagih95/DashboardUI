import mongoose from "mongoose";
import { NextResponse } from "next/server";
import EmployeesModel from "@/lib/models/employeeModel";

const { ConnectDB } = require("@/lib/config/db")

 const loadDB=async ()=>{
    await ConnectDB();
 }

 loadDB();

 export async function GET(req){
    const EmployeeID= req.nextUrl.searchParams.get('EmployeeID');
    console.log(EmployeeID);
    if(EmployeeID){
        const res = await EmployeesModel.findById(EmployeeID);
        console.log(res);
        return NextResponse.json(res)
    }
    else{
        const res = await EmployeesModel.find();
        console.log(res);
        return NextResponse.json(res)
    }

 }


 export async function POST(req){
    const data= await req.json();
    console.log(data.EmployeeName);
    const employee= await EmployeesModel.create(data)

    return NextResponse.json(employee);
    
 }

 export async function DELETE(req){
    const EmployeeID= req.nextUrl.searchParams.get('employeeID');
    console.log(EmployeeID);
    const res =await EmployeesModel.findByIdAndDelete(EmployeeID);
    return NextResponse.json(res);
}

export async function PUT(req){
    const EmployeeID= req.nextUrl.searchParams.get('employeeID');
    console.log(EmployeeID)
    const data= await req.json();
    console.log(data.EmployeeName);
    const res= await EmployeesModel.findByIdAndUpdate(EmployeeID,data,{new:true});
    return NextResponse.json(res);


 }