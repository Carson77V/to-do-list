// create array for program to run off
let projectTitles = []

// check if there is any localstorage, if not create new array in localstorage
if (!localStorage.getItem('projectTitles')) {
    localStorage.setItem('projectTitles', [])
  } else {
    // load localStorage data into memory
    projectTitles = localStorage.getItem('projectTitles').split(',')
  }

function addTitle(title) {
    projectTitles.push(title)
    localStorage.setItem('projectTitles', projectTitles)
}

function getTitles() {
    return projectTitles;
}

function deleteTitle(title) {
    const index = projectTitles.indexOf(title);
    if (index > -1) { // only splice array when item is found
        projectTitles.splice(index, 1); // 2nd parameter means remove one item only
        console.log(projectTitles)
        localStorage.setItem('projectTitles', projectTitles)
    }
}

export {addTitle, getTitles, deleteTitle};
