function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle 'done' on click
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Right-click to delete
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
