const fetchdata = require("../Models/fetchdata");

const createfetchdata = async (req, res) => {
  try {
    const {firstName,lastName, email, phone, gender,password, } = req.body;

    if (!firstName || !lastName || !email || !phone || !gender || !password) {
      return res.json({  success: false,  message: "All fields are required",});
    }

    const Existing = await fetchdata.findOne({ email });

    if (Existing) {return res.json({ success: false, message: "Email already exists",  });}

    
    const newData = new fetchdata({firstName, lastName, email, phone, gender, password,});

    
    const save = await newData.save();

    if (!save) {
      return res.json({success: false, message: "Failed to create data", });}

    return res.json({ success: true, message: "Data Created Successfully", data: save,});

  } catch (err) { console.log(err);

    return res.json({ success: false, message: "Error in create form",}); }
};


const fetchformdata = async (req,res)=>{
  try{
    const formdata = await fetchdata.find({})
    if(!formdata){
      return res.json({ succes: false, message: "candiate not found in the doto ist" })
    }
    return res.json({ succes: true, message: "candicate fetch successfully ", data: fetchdata })

  }catch(err){
    console.log(err.message)
    console.log("Error in the fetch candicate")
  }
}
module.exports = {
  createfetchdata,
  fetchformdata
  
};