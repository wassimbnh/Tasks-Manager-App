const express =require("express")
const port = process.env.PORT || 5000;
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const app = express();
const taskRoutes = require('./routes/taskRoutes')
const cors = require("cors");
app.use(cors());


app.use(express.json())

//db
mongoose.connect("mongodb://localhost:27017/", 
        console.log(`db connected `));



    
//mw
app.listen(port, )
      console.log(`server active  on ${port}`)


app.use(taskRoutes);