import { addTitle, getTitles, deleteTitle} from "./projects";

// Event listener for the "+" button beside project title
let plusButton = document.querySelector('.project-title > svg')
plusButton.addEventListener('click', () => {
    //Calls function to add the project form to the DOM
})

// Event listener for the Add button
let addButton = document.querySelector(".add-button")
addButton.addEventListener('click', () => {
    console.log('it worked!')
})

// Event listenr for the cancel button
let cancelButton = document.querySelector(".cancel-button")
cancelButton.addEventListener('click', () => {
    // Calls function to delete project form from the DOM
})

