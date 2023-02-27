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
    //  create the menu-item div to hold the elements
    const div = document.createElement('div')
    div.classList.add('menu-item')
    // create the title div
    const titleDiv = document.createElement('div')
    titleDiv.textContent = title
    // create the trash bin img
    const trash = document.createElement('img')
    trash.setAttribute('src', './images/trash-2.svg')
    trash.setAttribute('alt', 'trash icon')

    // add eventlistener to trash icon
    trash.addEventListener('click', (e) => {
        deleteTitle(e.srcElement.closest('div').value)
        e.srcElement.closest('.menu-item').remove()
    })

    // append the two children
    div.appendChild(titleDiv)
    div.appendChild(trash)
    
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
    // select the menu-form parent node
    const menuForm = e.srcElement.closest('.menu-form')
    // select the child of menu-form and the child of that to aquire the input node.
    // Take the value of the input node
    const inputText = menuForm.firstChild.firstChild.value
    // insert a new menu item after the form
    menuForm.insertAdjacentElement('afterend', createMenuItem(inputText))
    // add the title to the array 
    addTitle(inputText)

    // when everything is done, delete the form
    cancel(e)
}

// function used to delete menu-form
function cancel(e) {
    // find the closest menu form and remove it
    e.srcElement.closest('.menu-form').remove()
}



