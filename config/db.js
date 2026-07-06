const mongoose = require('mongoose')

const Database = async(mongoose)=>{
    try{
     await mongoose.connect(process.env.Database);
     console.log("moongoose is connected")
    }catch(err){
console.log(err)
console.log("mongoose is not connected")
    }
};
module.exports = Database;