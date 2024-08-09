import { ConnectDB } from "@/lib/config/db"
import EmployeesModel from "@/lib/models/employeeModel";
import { NextResponse } from "next/server";

const loadDB =async()=>{
    await ConnectDB();
}
loadDB();

export async function GET (req){
    const employeeID = req.nextUrl.searchParams.get('employeeID');
    if(employeeID){

        const res = await EmployeesModel.findById(employeeID);
        console.log(res);
        return NextResponse.json(res)
    }
    else{

        const res = await EmployeesModel.find();
        console.log(res);
        return NextResponse.json(res)
    }

}

export async function PUT(req){
    const employeeID = req.nextUrl.searchParams.get('employeeID');
    const data = await req.json();
    const res = await EmployeesModel.findByIdAndUpdate(employeeID,data,{new:true});
    return NextResponse.json(res);
    
}

export async function DELETE(req){
    const employeeID = req.nextUrl.searchParams.get('employeeID');
    console.log(employeeID);
    const res =await EmployeesModel.findByIdAndDelete(employeeID);
    return NextResponse.json(res);
}

export async function POST(req){
    const data =await req.json();
    console.log(data);
    const res =await EmployeesModel.create(data);
    console.log(data);
    return NextResponse.json(res);

}