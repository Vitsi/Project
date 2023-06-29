const ul = document.querySelector("ul");
const submitButton = document.getElementById("submit");

//add tasks
submitButton.onclick = function(event) {
    const task = document.getElementById("content").value;
    const li = document.createElement("li");
    li.classList.add("todoItem");
    li.innerHTML = task;
    li.contentEditable = true;

// Add the done, the edit and delete buttons to the li element.
    const doneButton = document.createElement("button");
    doneButton.classList.add("done");
    doneButton.textContent = "Done";

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.textContent = "Edit";
    editButton.setAttribute =("id", "editB")

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";

    li.appendChild(doneButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
//done 
function doneBtn(event){
    const doneButton = event.target;
    const li = doneButton.parentElement;
    const text = li.textContent;
  
    li.innerHTML= text.strike();
}
doneButton.addEventListener("click", doneBtn )

//delete
function deleteBtn(event) {
    const deleteButton = event.target;
    const li = deleteButton.parentElement;
    ul.removeChild(li);
  }
deleteButton.addEventListener("click", deleteBtn);

//edit
function editBtn(event) {
    const editButton = event.target;
    const li = editButton.parentElement;
    const newText = prompt("Enter new text:");
    li.textContent = newText;

}
editButton.addEventListener("click", editBtn);

//top
  ul.insertBefore(li, ul.firstChild);
//color change
  const cat1 = document.getElementById("category1");
  const cat2 = document.getElementById("category2");

  if (cat1.checked) {
    ul.style.color = "#3A82EE";
  } else if (cat2.checked) {
    ul.style.color = "#ec5ab4";
  } else {
    ul.style.color = "#313154";
  }

  event.preventDefault();
}

