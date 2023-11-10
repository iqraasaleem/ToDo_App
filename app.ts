import inquirer  from "inquirer";

// todos array= done
// function
// operation

let todos : string[] = ["urooj","shagufta"]

async function createTodo (todos : string[]){

    do {
        let answer = await inquirer.prompt({
            type: "list",
            message: "Select an Operation",
            name: "select",
            choices: ["Add","Update","View","Delete"]
        })
        
        if (answer.select == "Add") {
            let Addtodo = await inquirer.prompt({
                type: "input",
                message: "add item..",
                name: "Todo"
            });
            todos.push(Addtodo.Todo) 
            console.log(todos);
        } 
        if (answer.select == "Update") {
         let UpdateTodo = await inquirer.prompt({
            type: "list",
            message: "Select item for update",
            name: "Todo",
            choices: todos.map(item => item)
         }) 
         let Addtodo = await inquirer.prompt({
            type: "input",
            message: "add item..",
            name: "Todo"
        });
        let newTodos = todos.filter(value => value !== UpdateTodo.Todo)
        todos = [...newTodos, Addtodo.Todo]
        console.log(todos);
    }
        if (answer.select == "View") {
            console.log(todos);
        } 
        if (answer.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Select item for update",
                name: "Todo",
                choices: todos.map(item => item),
        });
        let newTodos = todos.filter((value)=> value !== deleteTodo.Todo)
        todos = [...newTodos]
        console.log(todos);
    }   
    
    } while (true);

    
}

createTodo(todos)

