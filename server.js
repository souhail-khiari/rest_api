const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const UserRouter = require("./routes/user");
connectDB();
app.use("/api/users", UserRouter);
const port = 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
