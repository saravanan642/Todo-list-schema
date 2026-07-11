const createfetchdata = async (req, res) => {
  try {
    const {firstName, lastName,email, phone, gender, password,} = req.body;

    console.log("My Data:", { firstName, lastName, email, phone, gender, password, });

    return res.json({
      success: true,
      message: "Data Created Successfully",
    });
  } catch (err) {
    console.log(err.message);

    return res.json({
      success: false,
      message: "Error in create form",
    });
  }
};

module.exports = {
  createfetchdata,
};