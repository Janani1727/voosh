
const express=require("express")

const { connection } = require("mongoose")
const db=require("./db")
const app=express()
const cors = require('cors');
app.use(express.json());
const {taskRouter}= require("./routes/task.route")
const {userRouter} = require("./routes/user.route")
const {authenticate} = require("./middleware/authentication.middleware")

app.use(cors());

// app.use("/users",userRouter)
// app.use(authenticate)

app.use("/tasks",taskRouter)

app.get("/", async (req, res) => {
  res.send("hello from server")
});

app.listen(8080,async()=>{
    try {
        await connection 

             console.log("connected to db")

    } catch (err) {
        console.log("not connected")
    }
    console.log("server started")
})

