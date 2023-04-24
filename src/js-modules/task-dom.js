import { delTask, editTask } from "./task-control.js"

// function that returns a task for the DOM
export default function createTask (title, date, id, priority) {
    //create default div to hold all the info
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task')
    taskDiv.classList.add('task-span')
    taskDiv.id = id

    //create two halves for the div 
    const taskStart = document.createElement('div')
    const taskEnd = document.createElement('div')
    taskStart.classList.add('task-start')
    taskEnd.classList.add('task-end')

    //create button to complete task
    const checkButton = document.createElement('span')
    checkButton.classList.add('task-circle')
    if (priority == 1){
        checkButton.style.cssText = 'box-shadow: 0 0 5px rgb(255, 60, 20), inset 0 0 5px rgb(255, 60, 20)'
    }
    else if (priority == 2){
        checkButton.style.cssText = 'box-Shadow: 0 0 5px #C9B400, inset 0 0 5px #C9B400'
    }
    checkButton.addEventListener('click', (e) => {delTask(e)})

    //create div to hold title of task
    const taskTitle = document.createElement('div')
    taskTitle.classList.add('task-title')
    taskTitle.textContent = title

    //create div to hold the date
    const taskDate = document.createElement('div')
    taskDate.classList.add('task-date')
    taskDate.textContent = date

    //create the edit button/img
    const editButton = document.createElement('img')
    editButton.src = 'images/edit.svg'
    editButton.setAttribute('alt', 'edit button')
    editButton.addEventListener('click', (e) => {editTask(e)})

    // Append all elements together
    taskEnd.appendChild(taskDate)
    taskEnd.appendChild(editButton)

    taskStart.appendChild(checkButton)
    taskStart.appendChild(taskTitle)

    taskDiv.appendChild(taskStart)
    taskDiv.appendChild(taskEnd)

    return taskDiv
}