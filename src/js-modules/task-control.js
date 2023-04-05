import task from './task-object.js'
import createTask from './task-dom.js'
import createTaskEdit from './task-edit-dom.js'

// create an array to store all the tasks
let allTasks = []

export default function renderTasks (menuSelected) {
    // select the add Task
    const tasksDiv = document.querySelector('#tasks')
    if (menuSelected = "All") {
        allTasks.forEach(createTask)
    }
}