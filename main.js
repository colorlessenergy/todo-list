var todos = [];
var sendTodo = document.getElementById("send");
var deleteTodo = document.getElementById("deleteTodo")
var createUl = document.createElement("ul");
var newTodo = document.getElementById("todo");

var handlers = {
  showTodos: function () {
    document.body.insertBefore(createUl, document.getElementsByTagName("script")[0]);
    createUl.innerHTML = "";
    for (var i = 0; i < todos.length; i++) {
      var createLi = document.createElement("li");
      createLi.innerHTML = todos[i].newTodo;
      createUl.appendChild(createLi);
    }
  },
  
  addTodos: function () {
    todos.push({
      newTodo: newTodo.value,
    });

  },
  deleteTodos: function () {
    var allLi = document.getElementsByTagName("li");
    for (var i = 0; i < allLi.length; i++) {
      allLi[i].addEventListener("click", function () {
        if (this.classList) {
          console.log(this);
          this.classList.toggle("toggle");
        }
      });
    }
  }
}


sendTodo.addEventListener("click", function () {
   handlers.addTodos();
   handlers.showTodos();
   handlers.deleteTodos();
   newTodo.value = "";

});


deleteTodo.addEventListener("click", function () {
  var allLi = document.getElementsByTagName("li");
  for (var i = allLi.length-1; i >= 0; i--) {
    if (allLi[i].classList.value === "toggle") {
      todos.splice(i, 1);
    }
  }
  handlers.showTodos();
});
