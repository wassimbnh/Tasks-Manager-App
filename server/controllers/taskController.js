const Task = require("../models/taskModel")


const taskController = {

    getAllTask : async (req,res) =>{
        const tasks = await Task.find();

        res.status(200).json(tasks);
    },

    addTask : async (req,res) => {

        if(!req.body){
            res.status(400).json({msg : "Please enter a task ! "})
            return;
        }
        
        const newTask = await Task.create({
            title: req.body.title,
            description: req.body.description,
            level:req.body.level,
            date:req.body.date
        })

        res.status(200).json(newTask)

    },

    editTask : async (req,res) =>{

        try {
            await Task.findByIdAndUpdate(req.params.id,req.body);
            res.status(200).json({msg:"Updated"});
          } catch (error) {
            console.error(error);
            res.status(500).json({msg: "Internal Server Error"});
          }
          

    },

    deleteTask : async (req,res) =>{
 
       try{
        const taskDel = await Task.findByIdAndRemove(req.params.id)
res.status(200).json({msg : "Task deleted"})
       }catch(error){
        console.error(error);
            res.status(500).json({msg: "Internal Server Error"});
       }

    },

    validateTask : async (req,res) =>{

    }




}

module.exports = taskController;