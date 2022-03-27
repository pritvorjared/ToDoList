const taskDB = {
  task: [],
};

const form = document.querySelector("form");
const input = form.querySelector("input");
const btn = form.querySelectorAll("button");
const div = document.querySelector(".main__container");

btn[0].addEventListener("click", (e) => {
  e.preventDefault();

  let newTask = input.value;

  if (newTask.length > 27) {
    newTask = `${newTask.substring(0, 27)}...`;
  }
  sortArr(taskDB.task);
  taskDB.task.push(newTask);
  createTaskList(taskDB.task);
});

function createTaskList(tasks) {
  div.innerHTML = "";
  sortArr(taskDB.task);
  tasks.forEach((item, i) => {
    div.innerHTML += `<div class="main__container-task">${
      i + 1
    }. ${item}. <div class="main__container-times">&times;</div></div>`;
  });
  input.value = "";

  document.querySelectorAll(".main__container-times").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
      taskDB.task.splice(i, 1);

      createTaskList(taskDB.task);
    });
  });
}

function clear() {
  btn[1].addEventListener("click", (e) => {
    e.preventDefault();
    taskDB.task.length = 0;
    div.innerHTML = "";
  });
}

const sortArr = (arr) => {
  arr.sort();
};

clear();
