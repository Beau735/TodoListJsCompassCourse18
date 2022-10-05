function addTodo() {
    //accessing the Input field from Html and cloning the text inside
    let inputField = document.querySelector(".todoInputField").value;
    //Testing if we are actually tapping in the Input field
    console.log(inputField);
    let addTodoButton
    //creating an Empty Html element to host the TextNode later
    let todoListItem = document.createElement("li");
    //The List that will host all the ListItems appended to it later
    let todosList = document.querySelector(".todoList");
    //a 2D Graphical representation of the Text from the InputField var
    let addTextNode = document.createTextNode(inputField);
    //Resetting the Input field to empty yet for the user
    document.querySelector(".todoInputField").value = " ";
    //assigning the TextNode Var as Child to the Empty ListItem
    todoListItem.appendChild(addTextNode);
    //assigning the ListItem with its TextNode as Child to the Html <ul>
    todosList.appendChild(todoListItem);
}