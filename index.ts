import inquirer from "inquirer"
let todos = [];
let condition = true;

while(condition)
{
    let addTask = await inquirer.prompt(
       [
        {
            name: "todo",
            type: "input",
            message: "AJJ SODA KIA AAYE GA...",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "OUR KIA AAYE GA...",
            default: "false"
        }
       ] 
    );
    todos.push(addTask.todo);
    condition = addTask.addMore
    console.log(todos)
}

