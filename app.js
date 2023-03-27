const express = require("express")
const app = express()
const PORT = 3000

const todosRouter = require("./routes")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use("/static", express.static(__dirname+"/public"))

app.use("/todos", todosRouter) 

app.listen(PORT, () => {
  console.log("App running on port: ", PORT);
})