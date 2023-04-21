const addForm = document.querySelector(".add");
const tasks = document.querySelector(".tasks");
const clearAll = document.querySelector(".clear");
const messageSpan = document.querySelector(".message span");

function updateMessage() {
    const tasksQuantity = tasks.children.length;
    messageSpan.textContent = `You have ${tasksQuantity} pending tasks`
}

updateMessage(); //call the function on page load

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = addForm.task.value.trim();

  if (value.length) {
    tasks.innerHTML += `<li>
        <span>${value}</span>
        <i class="bi bi-trash-fill delete"></i>
    </li>`;
    //adding a list item into the tasks div
    addForm.reset();
    //reseting the input
    updateMessage();
    //updating the quantity on tasks present
  }
});


tasks.addEventListener("click", event => {
    //event listener on entire div due to event listener not working on the freshly added tasks without reloading the page? 
    if (event.target.classList.contains("delete")) {
        //logic that ensures task is only removed when correct part of element is clicked
        event.target.parentElement.remove();
        //updating the quantity on tasks present
        updateMessage();
    }
})

clearAll.addEventListener("click", event => {
    //grab all elements in the tasks div
    const taskItems = tasks.querySelectorAll("li");
    //loop throught all elements
    taskItems.forEach(element => {
        //remove each element individually
        element.remove();
    })
    updateMessage();
})