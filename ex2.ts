interface myToDosInterface{
    myTasks:Array<string>;
    addTask(task:string):number;
    listAlltasks():void;
    deleteTasks(task:string):number;
}

class myTodos implements myToDosInterface{
    myTasks:Array <string>=[];

    addTask(task: string): number {
        let lenght:number=this.myTasks.push(task);
        console.log(task+" added to my tasks");
        return lenght;
    }
    
    listAlltasks(): void {
        this.myTasks.forEach(
            (Element)=>{
                console.log(Element+" is in my Tasks List.");
            }
        );
    }

    deleteTasks(task:string):number{
        let index:number=this.myTasks.indexOf(task,0);
        if(index != -1){
            this.myTasks.splice(index,1);
            console.log(task+" remove from my tasks list.");
        }else{
            console.log(task+"is not in my tasks list.");
        }
        return this.myTasks.length;
    }
}
let myTask=new myTodos();
myTask.addTask("work");
myTask.listAlltasks();
myTask.deleteTasks("sleep");