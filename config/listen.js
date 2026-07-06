const listen = async (app) => {
    try {
        const port = process.env.PORT
        if (!app) {
            console.log("Express is missing")
            return
        }
        if (!port) {
            console.log("port is missing ")
            return
        }
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

    } catch (err) {
        console.log(err)
        console.log("Error in the server to connected to faild")

    }
};
module.exports = listen;