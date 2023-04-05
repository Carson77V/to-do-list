import task from './task-object.js'
import createTask from './task-dom.js'
import createTaskEdit from './task-edit-dom.js'

// create an array to store all the tasks
let allTasks = []

export default function renderTasks (menuSelected) {
    // first remove the current tasks
    removeTasks()
    // select the add Task
    const tasksDiv = document.querySelector('#tasks')
    if (menuSelected = "All") {
        allTasks.forEach(createTask)
    }
}

// when renderTasks() is called, use this function to delete the current tasks
function removeTasks () {
    // create node lists of all current tasks in the DOM
    const allTasks = document.querySelectorAll('.task-span')
    // remove each task
    allTasks.forEach((item) => {
        item.remove()
      });
}