import { addTitle, getTitles, deleteTitle} from "./projects";
import { createMenuItem, createForm } from "./dom-projects" 

// Event listener for the "+" button beside project title
const plusButton = document.querySelector('.project-title > svg')
plusButton.addEventListener('click', () => {
    //Calls function to add the project form to the DOM
    const project = document.querySelector('.projects')
    project.appendChild(createForm())

    // add eventlisteners to buttons
    const addButton = document.querySelector(".add-button")
    addButton.addEventListener('click', saveButtonListener(addButton))
    const cancelButton = document.querySelector(".cancel-button")
    cancelButton.addEventListener('click', cancelButtonListener(cancelButton))
})

// add functionality to save button
function saveButtonListener(addButton) {
    //select the projects
    const project = document.querySelector('.projects')
    // select closest input node of button
    const input = addButton.closest('div')
    console.log(input)
    // extract the text
    //const title = input.value
    // Add the new project to the bottom of the DOM
    project.appendChild(createMenuItem(input))
}

// add functionality to cancel button
function cancelButtonListener(cancelButton) {

}

