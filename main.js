let btn = document.querySelector(".class-btn");
let input = document.querySelector(".task-input");
let taskList = document.querySelector(".task-list");
let remove=document.querySelector(".remove")
btn.addEventListener("click", () => {
  const val = input.value;
  if (val.trim() !== "") {
    addTask(val);
    input.value = "";
  }
});

function addTask(val) {
  let li = document.createElement("li");
  li.classList.add("listitem-container");
  li.innerHTML = `<div class="list-item">
    <input type="checkbox"/>
    <p class="task">${val}</p>
  </div>
  <i class="fa-solid fa-xmark remove"></i>`;

  taskList.appendChild(li);
  const checkbox = li.querySelector("input[type='checkbox']");
  checkbox.addEventListener("change", (e) => {
    const taskParagraph = li.querySelector(".task");
    if (e.target.checked) {
      taskParagraph.style.textDecoration = "line-through";
    } else {
      taskParagraph.style.textDecoration = "none";
    }
  });
}

taskList.addEventListener("click",(e)=>{
    if (e.target.tagName==="I") {
        e.target.parentElement.remove()
    }
})
