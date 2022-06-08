const toDoform = document.querySelector("#todofrom"),
    toDoinput = ducument.querySelector("input"),
    LS_TODO = 'TODO'
    toDolist = document.querySelector("ul");
let todos = [];

function LS_Save(){
    localStorage.setItem(LS_TODO, JSON.stringify(todos));
}