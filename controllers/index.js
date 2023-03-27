const connection = require("../config")

class Todos {
  static async getTodos(req,res) {
    try {
      let results = await connection.query(`select * from todos order by id`)

      res.render("home", { data: results.rows })
      // res.status(200).json(results.rows)
    } catch (error) {
      // res.status(500).json(error)
    }
  }

  static async addTodos(req, res) {
    try {
      const title = req.body.title

      await connection.query(`insert into todos (title, checked) values ($1, $2)`, [title, false])

      res.redirect("/todos")

    } catch (error) {
      console.log(error);
    }
  }

  static async deleteTodos(req, res) {
    try {
      const id = req.params.id

      await connection.query(`delete from todos where id = ($1)`, [id])

      res.end()
    } catch (error) {
      console.log(error);
    }
  }

  static async editTodos(req, res) {
    try {
      const id = req.params.id
      const is_checked = req.body.is_checked

      await connection.query(`update todos set checked = ($1) where id = ($2)`, [is_checked, id])

      res.send()

    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Todos