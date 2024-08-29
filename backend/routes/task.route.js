const express=require("express")
// const jwt=require("jsonwebtoken")
const {TaskModel} =require("../model/task.model")

const taskRouter =express.Router()


taskRouter.get("/", async (req, res) => {
  try {
      const tasks= await TaskModel.find()
      res.send(tasks)
  } catch (error) {
    res.send(error.message)
  }
});


taskRouter.post("/create",async(req,res)=>{
// console.log("task route working")
    try {
        // console.log("try")
        const payload=req.body
        console.log(payload)
        const post =new TaskModel(payload)
        await post.save()
        res.send(post)
    } catch (error) {
        res.send(error)
    }
   
})

taskRouter.patch("/edit/:id", async (req, res) => {
    const payload = req.body
    const id = req.params.id

    try {
        await TaskModel.findByIdAndUpdate({ "_id": id }, payload)
        res.send({ "msg": "task has been updated" })
    } catch (err) {
        res.send({ "msg": "task not updated" })
    }
})

taskRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id

    try {
        await TaskModel.findByIdAndDelete({ "_id": id })
        res.send({ "msg": "task has been Deleted" })
    } catch (err) {
        res.send({ "msg": "task not Deleted" })
    }
})



module.exports={taskRouter}
