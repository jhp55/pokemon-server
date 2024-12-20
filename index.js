const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();

const app = express();
const PORT = 3000;

app.set("port",PORT);
app.use(express.json());

//Routes

//DB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connect to DB"))
.catch((err)=>console.error(err));

app.listen(PORT,()=>{
    console.log(`Listening in port ${PORT}`)
});