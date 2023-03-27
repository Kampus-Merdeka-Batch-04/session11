const express = require("express")
const router = express.Router()
const TodosController = require("../controllers")

router.get("/", TodosController.getTodos)

router.post("/", TodosController.addTodos)

router.delete("/:id", TodosController.deleteTodos)

router.put("/:id", TodosController.editTodos)

module.exports = router