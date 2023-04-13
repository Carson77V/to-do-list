import { task } from './task-object.js'
import createTask from './task-dom.js'
import createTaskEdit from './task-edit-dom.js'
import { menuSelected as menuSelected} from './projects-control.js'

// create an array to store all the tasks
let allTasks = []

//add event listener to +Add Task button
const addTask = document.querySelector('.add-task')
addTask.addEventListener('click', () => {
    // Need to put a task-edit above +Add Task
    const tasksDiv = document.querySelector('#tasks')
    tasksDiv.insertBefore(createTaskEdit(null, null, null, 3), addTask)
})

export function renderTasks (menuSelected) {
    // first remove the current tasks
    removeTasks()

    // create a new array that holds only the required tasks from the project
    const newArray = allTasks.filter(item => {
        if (menuSelected == "Today") {
            // TO DO
        }
        else if (menuSelected == "Important") {
            return item.getPriority == 1;
        }
        else if (menuSelected == "All") {return true}
        else {
            return item.getProject() == menuSelected; 
        }
    });
    // Select the add task 
    const addTask = document.querySelector('.add-task')
    // select tasks div
    const tasksDiv = document.querySelector('#tasks')
    //loop through the new array and render the tasks
    newArray.forEach((item) => {
        // add new elements before + Add Task
        const ele = createTask(item.getTitle(), item.getDate())
        tasksDiv.insertBefore(ele, addTask)
    })
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

export function save (e) {
    // get the src element and then the form node
    const button = e.srcElement
    const form = button.closest('form')
    // gather all required info to build a new task object
    const title = form.querySelector('#title-edit').value
    const date = form.querySelector('#date').value
    const description = form.querySelector('textarea').value
    const priority = form.querySelector('#priority').value
    allTasks.push(task(title, date, description, priority, menuSelected))
    // render the new tasks
    // other task form on page will be removed
    renderTasks(menuSelected)
    // remove the form
    form.parentElement.remove()
}

export function delTask(e) {
    // get the parent element
    const parent = e.srcElement.parentElement.parentElement
    // get the title and date
    const title = parent.querySelector('.task-title')
    const date = parent.querySelector('.task-date')
    // use the function to find the index of the array where the task is saved
    const i = taskSearch(title.textContent, date.textContent)
    // deletes the object from the array
    allTasks.splice(i, 1)
    // remove the element from the DOM
    parent.remove()
}

// this function uses the title and date of a task to find its 
// index in the array and returns it
function taskSearch (title, date) {
    // create a new array that stores all indexes with same title
    const firstSort = []
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].getTitle() === title) {
            firstSort.push(i)
        }
    }
    // repeat process to narrow down indexes based off of date
    const secondSort = []
    // have to sort through firstSort[] to find all the indexes
    for (let i = 0; i < firstSort.length; i++) {
        if (allTasks[firstSort[i]].getDate() == date) {
            // append those indexes to secondSort[]
            secondSort.push(firstSort[i])
        }
    }
    // using secondSort find the task with a Project that matches menu selected
    // return the index
    if (menuSelected != 'All') {
        for (let i = 0; i < secondSort.length; i++){
            if (allTasks[secondSort[0]].getProject() === menuSelected){
                return i
            }
        }
    }
    // if there are multiples in 'All', return the index to the first task
    else {
        return secondSort[0]
    }

}