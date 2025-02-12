var myTodos = /** @class */ (function () {
    function myTodos() {
        this.myTasks = [];
    }
    myTodos.prototype.addTask = function (task) {
        var lenght = this.myTasks.push(task);// adds the task
        console.log(task + " added to my tasks");
        return lenght; // returns updated task list
    };
    myTodos.prototype.listAlltasks = function () {
        this.myTasks.forEach(function (Element) {
            console.log(Element + " is in my Tasks List."); // prints each task in the list
        });
    };
    myTodos.prototype.deleteTasks = function (task) {
        var index = this.myTasks.indexOf(task, 0); //finds the index of the task
        if (index != -1) {// if task exits in the list
            this.myTasks.splice(index, 1);//removes the task from the array
            console.log(task + " remove from my tasks list.");
        }
        else {
            console.log(task + "is not in my tasks list.");
        }
        return this.myTasks.length;
    };
    return myTodos; // returns updated task list 
}());
var myTask = new myTodos();
myTask.addTask("work");
myTask.listAlltasks();
myTask.deleteTasks("sleep");
