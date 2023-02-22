import { addTitle, getTitles, deleteTitle} from "./projects";
import { createMenuItem, createForm } from "./dom-projects" 

// Event listener for the "+" button beside project title
const plusButton = document.querySelector('.project-title > svg')
plusButton.addEventListener('click', () => {
    //Calls function to add the project form to the DOM
    const project = document.querySelector('.projects')
    project.appendChild(createForm())
})

// Event listener for the Add button
const addButton = document.querySelector(".add-button")
addButton.addEventListener('click', () => {
    //select the projects
    const project = document.querySelector('.projects')
    // Add the new project to the bottom of the DOM
    project.appendChild(createMenuItem())
})

// Event listenr for the cancel button
const cancelButton = document.querySelector(".cancel-button")
cancelButton.addEventListener('click', () => {
    // Calls function to delete project form from the DOM
})

