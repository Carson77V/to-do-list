export default function createTaskEdit (title, date, description, priority) {
    //create div to hold all the elements
    const taskForm = document.createElement('div')
    taskForm.classList.add('task-span')
    taskForm.classList.add('task-form')

    //create the form 
    const form = document.createElement('form')
    form.setAttribute('action', '')
    form.setAttribute('method', 'post')

    //start by creating elements for the top of the form
    //the title and date are inlcuded here
    const topEdit = document.createElement('div')
    topEdit.classList.add('top-form-task')

    //input for the title
    const editTitle = document.createElement('input')
    editTitle.setAttribute('type', 'text')
    editTitle.setAttribute('id', 'title-edit')
    editTitle.setAttribute('placeholder', 'Title')
    editTitle.setAttribute('name', 'title-edit')
    editTitle.setAttribute('maxlength', '20')
    editTitle.value = title //TO DO

    //input for the date
    const dateDiv = document.createElement('div')
    const dateLabel = document.createElement('label')
    dateLabel.textContent = 'Date: '
    dateLabel.setAttribute('for', 'date')
     
    const inputDate = document.createElement('input')
    inputDate.setAttribute('type', 'date')
    inputDate.setAttribute('id', 'date')
    inputDate.setAttribute('name', 'date')
    inputDate.value = date //TO DO

    //append the top together and add it to the full form
    dateDiv.appendChild(dateLabel)
    dateDiv.appendChild(inputDate)

    topEdit.appendChild(editTitle)
    topEdit.appendChild(dateDiv)

    form.appendChild(topEdit)

    //create the textarea
    const textAreaDiv = document.createElement('div')
    textAreaDiv.classList.add('textarea-div')

    const textArea = document.createElement('textarea')
    textArea.setAttribute('placeholder', 'Description')
    textArea.value = description //TO DO 

    textAreaDiv.appendChild(textArea)
    form.appendChild(textAreaDiv)

    //create the bottom of the form
    const lowerDiv = document.createElement('div')
    lowerDiv.classList.add('lower-form-task')

    const encompasDiv = document.createElement('div')

    const priorityLabel = document.createElement('label')
    priorityLabel.textContent = 'Priority: '
    priorityLabel.setAttribute('for', 'priority')

    const prioritySelect = document.createElement('select')
    prioritySelect.setAttribute('name', 'priority')
    prioritySelect.setAttribute('id', 'priority')
    prioritySelect.value = priority //TO DO

    //use a loop to add 3 options to the DOM
    for (let i = 1; i <=3; i++) {
        //use a function to return the DOM option element
        prioritySelect.appendChild(createOption(i))
    }

    //append the priority elements to the div
    encompasDiv.appendChild(priorityLabel)
    encompasDiv.appendChild(prioritySelect)

    // create the Save and Delete buttons in their own div
    const buttonDiv = document.createElement('div')

    const delButton = document.createElement('button')
    delButton.textContent = 'Del'
    delButton.setAttribute('type', 'button')

    const saveButton = document.createElement('button')
    saveButton.textContent = 'Save'
    saveButton.setAttribute('type', 'button')

    buttonDiv.appendChild(delButton)
    buttonDiv.appendChild(saveButton)

    // append the lower elements 
    lowerDiv.appendChild(encompasDiv)
    lowerDiv.appendChild(buttonDiv)
    //append the lower div to the form
    form.appendChild(lowerDiv)
    //append form to the task div
    taskForm.appendChild(form)

    return taskForm
}

// creates options for the priority element
function createOption (i) {
    const option = document.createElement('option')
    option.textContent = i
    option.setAttribute('value', i)
    return option
}