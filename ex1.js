//arrays to store tasks
var myTasks = [];
var array2 = [];


function addTask(task) {
    var length = myTasks.push(task);// Adds task to the array and returns new length
    console.log(task + " Added to my tasks");
    return length; // Returns the new length of the task array
}
function listAllTasks() {
    myTasks.forEach(function (Element) {
        console.log(Element + " is in my Task list."); // Logs each task in the array
    });
}
function deleteTasks(task) {
    var index = myTasks.indexOf(task);
    if (index > 0) {
        myTasks.splice(index, 1); // removes the task form the array
        console.log(task + "was removed"); 
    }
    else {
        console.log(task + " isn't in list");
    }
    return myTasks.length; // Returns the updated length of the array
}
addTask("work");
addTask("rest");
listAllTasks();
