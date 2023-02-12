const express = require('express');
require('dotenv').config()
const app =express();


app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on:",process.env.APP_PORT)
});