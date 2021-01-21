function get_todos() {            // Create Array from local storage of todo items
    var todos = []
    var todos_str = localStorage.getItem('todo')

    if (todos_str != null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {                  // Capture values as todo items on Local Storage, call Array and Show in HTML
    var task = document.getElementById('task').value;

    var todos = get_todos();

    todos.push(task);

    localStorage.setItem('todo',JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

function show() {
    var todos = get_todos();
    //Set up task as Unordered List
    var html = '<ul>';

    for ( var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" onclick="remove('+i+')" id="' + i +'">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;
}

document.getElementById('add').addEventListener('click', add);

show();

function remove(clicked_id) {
    var todos = get_todos();
    todos.splice(clicked_id, 1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}

function colorChange() {
    const randomColor =
Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.getElementById('task').style.backgroundColor = "#" + randomColor;

}
