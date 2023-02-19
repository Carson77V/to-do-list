// the array to store all the users project titles
// Not exported to avoid it being in the global space
let projectTitles = [];

function addTitle (title) {
    projectTitles.push(title)
}

function getTitles () {
    return projectTitles;
}

function deleteTitle (title) {
    const index = projectTitles.indexOf(title);
    if (index > -1) { // only splice array when item is found
        projectTitles.splice(index, 1); // 2nd parameter means remove one item only
    }
}

export {addTitle, getTitles, deleteTitle};
