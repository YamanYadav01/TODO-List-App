let todoList = [
 /*   {
        item:    'op',
        dueDate:   '2/4/2020'
    },
    {
        item: 'collage',
        dueDate: '5/2/2024'
    }*/
];

displayItems();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value
   
    todoList.push({item: todoItem, dueDate: todoDate});
    localStorage.setItem('todoData',JSON.stringify(todoList))
    inputElement.value = ' ';
    dateElement.value = ' ';

    displayItems();
}

//JSON.parse(localStorage.getItem('product'))

// function store(){
//     let data = JSON.parse(localStorage.getItem('todoDate'))
//     todoList.push(data);
// }



function displayItems(){
    let containerElement = document.querySelector('.todo-container');

    let newHtml = ' ';
  
    for(let i=0; i<todoList.length; i++){
        // let item = todoList[i].item;
        // let dueDate = todoDate[i].dueDate;

        let {item, dueDate} = todoList[i];
        newHtml += `
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete"  onclick="todoList.splice(${i},1); displayItems();">Delete</button>
        
        `;
        }
    containerElement.innerHTML = newHtml
   

}