const express = require('express');
require('dotenv').config();
const app =express();
const addRoute = require("./apis/admin.routers");
const cors = require("cors")



app.use(express.json());
app.use(cors());
app.use("/Admin",addRoute);

app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on:",process.env.APP_PORT)
});