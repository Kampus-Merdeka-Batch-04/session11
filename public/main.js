function deleteTodos(id) {
  return $.ajax({
    method: "DELETE",
    url: "/todos/"+ id,
    contentType: "application/json",

    success: () => {
      location.reload()
    },

    error: (err) => {
      console.log(err);
    }
  })
}

function updateTodos(id, is_checked) {
  return $.ajax({
    method: "PUT",
    url: "/todos/" + id,
    contentType: "application/json",
    data: JSON.stringify({
      is_checked: is_checked
    }),

    success: () => {
      location.reload()
    },

    error: (err) => {
      console.log(err);
    }
  })
}