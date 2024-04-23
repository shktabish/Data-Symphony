const mongoose = require("mongoose")
const User= mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            index: true
        },
        email:{
            type :String,
            unique:true,
            required: true,
            trim:true,
            lowercase:true,
        },
        password:{
            type :String,
            required: true,
            trim:true,
        },
        avatar:{
            type :String,
            required :true
        }
    }
)
