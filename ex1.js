var myTasks = [];
var array2 = [];
function addTask(task) {
    var length = myTasks.push(task);
    console.log(task + " Added to my tasks");
    return length;
}
function listAllTasks() {
    myTasks.forEach(function (Element) {
        console.log(Element + " is in my Task list.");
    });
}
function deleteTasks(task) {
    var index = myTasks.indexOf(task);
    if (index > 0) {
        myTasks.splice(index, 1);
        console.log(task + "was removed");
    }
    else {
        console.log(task + " isn't in list");
    }
    return myTasks.length;
}
addTask("work");
addTask("rest");
listAllTasks();
