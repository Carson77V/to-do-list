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
    tasksDiv.insertBefore(createTaskEdit(null, null, null, 3, 'null'), addTask)
})

export function renderTasks (menuSelected) {
    // first remove the current tasks
    removeTasks()

    // create a new array that holds only the required tasks from the project
    const newArray = allTasks.filter(item => {
        if (menuSelected == "Today") {
            return isDueToday(item.getDate())
        }
        else if (menuSelected == "Important") {
            return item.getPriority() == 1;
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
        const ele = createTask(item.getTitle(), item.getDate(), item.getId())
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
    // get the src element and then the div containing info
    const button = e.srcElement
    const form = button.closest('.task-form')
    // gather all required info to build a new task object
    const title = form.querySelector('#title-edit').value
    const date = form.querySelector('#date').value
    const description = form.querySelector('textarea').value
    const priority = form.querySelector('#priority').value
    // get id index of form
    let id = form.id
    if (form.id == 'null') {
        console.log(id)
        id = allTasks.length
        allTasks.push(task(title, date, description, priority, menuSelected, id))
    }
    // if not a new task, make changes to data
    else {
        allTasks[+id].setTitle(title)
        allTasks[+id].setDate(date)
        allTasks[+id].setDescription(description)
        allTasks[+id].setPriority(priority)
    }
    // render the new tasks
    // other task form on page will be removed
    renderTasks(menuSelected)
    // remove the form
    form.remove()
}

export function delTask(e) {
    // get the parent element
    const parent = e.srcElement.parentElement.parentElement
    // use the function to find the index of the array where the task is saved
    const i = taskSearch(parent)
    // deletes the object from the array
    allTasks.splice(i, 1)
    // remove the element from the DOM
    parent.remove()
}

// will open an edit form for the task
export function editTask(e) {
    // get the parent element
    const parent = e.srcElement.parentElement.parentElement
    // find the task in the allTasks array
    const i = +(parent.id)
    console.log(i)
    // open the edit window below the tasks then delete the task
    // leave edit menu open
    parent.insertAdjacentElement('afterend', 
    createTaskEdit(allTasks[i].getTitle(), allTasks[i].getDate(), 
    allTasks[i].getDescription(), allTasks[i].getPriority(), allTasks[i].getId()))
    parent.remove()
}

// this function uses the title and date of a task to find its 
// index in the array and returns it
// function taskSearch (parent) {
//     // save the title and date by splitting the returned string
//     const variables = getTaskVars(parent).split('.')
//     console.log(parent.id)

//     // create a new array that stores all indexes with same title
//     const firstSort = []
//     for (let i = 0; i < allTasks.length; i++) {
//         if (allTasks[i].getTitle() === variables[0]) {
//             firstSort.push(i)
//         }
//     }
//     // repeat process to narrow down indexes based off of date
//     const secondSort = []
//     // have to sort through firstSort[] to find all the indexes
//     for (let i = 0; i < firstSort.length; i++) {
//         if (allTasks[firstSort[i]].getDate() == variables[1]) {
//             // append those indexes to secondSort[]
//             secondSort.push(firstSort[i])
//         }
//     }
//     // using secondSort find the task with a Project that matches menu selected
//     // return the index
//     if (menuSelected != 'All') {
//         for (let i = 0; i < secondSort.length; i++){
//             if (allTasks[secondSort[0]].getProject() === menuSelected){
//                 return secondSort[i]
//             }
//         }
//     }
//     // if there are multiples in 'All', return the index to the first task
//     else {
//         return secondSort[0]
//     }
// }

// functin returns true if the due date is today or from the past
function isDueToday (date) {
    // create today's date
    const today = new Date()
    // split the date from the task into a new array
    const currentDates = date.split('-')
    // if the year is less than current year return true
    if (currentDates[0] < today.getFullYear()) return true;
    // if month is month is less than current return true
    if (currentDates[1] < today.getMonth()) return true;
    // if day is less than or equal to current day return true
    if (currentDates[2] <= today.getDate()) return true;

    return false
}

function getTaskVars (parent) {
    // get the title and date
    const title = parent.querySelector('.task-title').textContent
    const date = parent.querySelector('.task-date').textContent

    // return title and date as a string
    return title + '.' + date
}