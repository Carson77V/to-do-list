import { addTitle, getTitles, deleteTitle} from "./projects"
import { renderTasks } from "./task-control.js"

// variable used to keep track of which menu item is selected
export let menuSelected = 'All'

//Add events to the default menu options
const menuItems = document.querySelectorAll('.menu-item')
menuItems.forEach(addMenuItemEvent)

// Load localStorage data into the DOM
const menuTitles = document.querySelector('.projects')
const array = getTitles()
for (let i = 0; i < array.length; i++) {
    menuTitles.appendChild(createMenuItem(array[i]))
}

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
        deleteTitle(e.srcElement.previousElementSibling.textContent)
        e.srcElement.closest('.menu-item').remove()
    })

    // append the two children
    div.appendChild(titleDiv)
    div.appendChild(trash)

    addMenuItemEvent(div)
    
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
    input.setAttribute('maxlength', '15')

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

// add event listener for a menu-item
function addMenuItemEvent (item) {
    item.addEventListener('click', (e) => {
        // removes the class that is highlighting the currently selected item
        const currentSelected = document.querySelector('.menu-selected')
        // make sure currentSelected isn't null to prevent an error
        // currentSelected will be null when the trash icon is clicked to delete
        if (currentSelected != null){
            currentSelected.classList.remove('menu-selected')
        }
        //add the menu-selected class to the item that was selected
        e.srcElement.classList.add('menu-selected')
        // call function to render the tasks
        // if textContent reading null error appears, catch the error
        // and confirm project deletion
        try {
            menuSelected = e.srcElement.firstChild.textContent
        }
        catch (err){
            console.log('Project Deleted')
        }
        renderTasks(menuSelected)
    })
}
