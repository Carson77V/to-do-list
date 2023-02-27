import { addTitle, getTitles, deleteTitle} from "./projects"

// Event listener for the "+" button beside project title
const plusButton = document.querySelector('.project-title > svg')
plusButton.addEventListener('click', () => {
    //Calls function to add the project form to the DOM
    const project = document.querySelector('.projects')
    project.appendChild(createForm())

})

// Returns the DOM element of a menu-item 
// a simple project is added to the list on the DOM
function createMenuItem(title) {
    const div = document.createElement('div')
    div.classList.add('menu-item')
    div.textContent = title
    return div
}

// returns a form for DOM to be used to create a new project
function createForm() {
    // create the div that encompasses the entire block
    const menuForm = document.createElement('div')
    menuForm.classList.add('menu-form')

    // create the form and add attributes
    const form = document.createElement('form')
    form.setAttribute('action', "")
    form.setAttribute('method', 'post')

    // create the input box for text
    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('id', 'project-title')
    input.setAttribute('name', 'projectTitle')

    // create div to encompass buttons
    const projectButtons = document.createElement('div')
    projectButtons.classList.add('project-buttons')

    //create the buttons
    const addButton = document.createElement('button')
    addButton.classList.add('add-button')
    addButton.setAttribute('type', 'button')
    addButton.textContent = "Add"

    const cancelButton = document.createElement('button')
    cancelButton.classList.add('cancel-button')
    cancelButton.setAttribute('type', 'button')
    cancelButton.textContent = "Cancel"

    // add eventlisteners
    addButton.addEventListener('click', (e) => {
        save(e)
    })
    cancelButton.addEventListener('click', (e) => {
        cancel(e)
    })

    // Append the buttons to projectButtons
    projectButtons.appendChild(addButton)
    projectButtons.appendChild(cancelButton)

    // Append input to form then projectButtons to form
    form.appendChild(input)
    form.appendChild(projectButtons)

    // append form to the main div (menuForm)
    menuForm.appendChild(form)

    return menuForm
}

function save(e) {
    cancel(e)
}

function cancel(e) {
    e.srcElement.closest('.menu-form').remove()
}

