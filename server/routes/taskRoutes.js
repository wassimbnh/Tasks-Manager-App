const {Router} = require("express")
const router = Router();
const taskController = require("../controllers/taskController")


router.get("/api/tasks",taskController.getAllTask);
router.post("/api/addTask",taskController.addTask);
router.put("/api/editTask/:id",taskController.editTask);
router.delete("/api/deleteTask/:id",taskController.deleteTask);
router.post("/api/validateTask",taskController.validateTask);

module.exports = router;