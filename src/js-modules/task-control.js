import { task } from './task-object.js'
import createTask from './task-dom.js'
import createTaskEdit from './task-edit-dom.js'
import { menuSelected as menuSelected} from './projects-control.js'
//localStorage.clear()
// create an array to store all the tasks
let allTasks = []

if (JSON.parse(localStorage.getItem('allTasks')) != null) {
    allTasks = JSON.parse(localStorage.getItem('allTasks'))
    // assign the prototype because it isn't saved with localStorage
    allTasks.forEach((item, index) => {
        allTasks[index] = task(item.title, item.date, item.description, item.priority, item.project, item.id)
    })
}

// render the tasks when page is reloaded or opened
// rendered after tasks have been loaded into memory
renderTasks("All")

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
        const ele = createTask(item.getTitle(), item.getDate(), item.getId(), item.getPriority())
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
    // save the data to localStorage
    localStorage.setItem('allTasks', JSON.stringify(allTasks))
}

export function delTask(e) {
    // declare the parent value
    let parent = ''
    // check if task is being completed or deleted and save
    // the task DOM element to get id later
    if (e.srcElement.classList.value == 'task-circle'){
        parent = e.srcElement.parentElement.parentElement
    }
    else {
        parent = e.srcElement.closest('.task-form')
    }
    // use the function to find the index of the array where the task is saved
    const i = +(parent.id)
    // deletes the object from the array
    allTasks.splice(i, 1)
    // remove the element from the DOM
    parent.remove()
    // re-assign the id's for each task
    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].setId(i)
    }
    localStorage.setItem('allTasks', JSON.stringify(allTasks))
    removeTasks()
    renderTasks(menuSelected)
}

// will open an edit form for the task
export function editTask(e) {
    // get the parent element
    const parent = e.srcElement.parentElement.parentElement
    // find the task in the allTasks array
    const i = +(parent.id)
    // open the edit window below the tasks then delete the task
    // leave edit menu open
    parent.insertAdjacentElement('afterend', 
    createTaskEdit(allTasks[i].getTitle(), allTasks[i].getDate(), 
    allTasks[i].getDescription(), allTasks[i].getPriority(), allTasks[i].getId()))
    parent.remove()
}

// functin returns true if the due date is today or from the past
function isDueToday (date) {
    // if there is no date, return false
    if (date == '') {return false}
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