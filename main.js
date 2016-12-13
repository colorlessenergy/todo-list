var todos = ["hello"];

var handlers = {
  "displayTodos": function () {
    console.log(todos);
  },
  addTodos: function () {
    var newTodo = prompt("what do you want to add to the list");
    todos.push(newTodo);
    this.displayTodos();
  },
  showTodos: function () {
    var createUl = document.createElement("ul");
    document.body.appendChild(createUl);
    for (var i = 0; i < todos.length; i++) {
      var createLi = document.createElement("li");
      createLi.innerHTML = todos[i];
      createUl.appendChild(createLi);
    }
  }
}

handlers.addTodos();
