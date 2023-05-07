const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userapi")
.then(()=>{
    console.log("mongodb connected")
}).catch((err)=>{
    console.log("connection failed")
});