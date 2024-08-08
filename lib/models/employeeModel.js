const mongoose  = require("mongoose");

const Shcema =mongoose.Schema({
    employeeName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
    },


    });

    const EmployeesModel= mongoose.models.employees || mongoose.model('employees', Shcema)

    export default EmployeesModel;