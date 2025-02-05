let myTasks:Array<string>=[];
let array2:string[]=[];

function addTask(task: string):number{
    let length: number = myTasks.push(task);
    console.log(task+" Added to my tasks");
    return length;

}

function listAllTasks():void{
    myTasks.forEach(
        (Element)=>{
            console.log(Element+" is in my Task list.");
        }
    );
}

function deleteTasks(task: string): number{
    let index:number = myTasks.indexOf(task);
   

    if(index > 0){
        myTasks.splice(index,1)
        console.log(task+"was removed")
    }else{
        console.log(task+" isn't in list")
    }
    return myTasks.length;
    }

addTask("work");
addTask("rest");
listAllTasks();
