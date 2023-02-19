// the array to store all the users project titles
// Not exported to avoid it being in the global space
let projectTitles = [];

function addTitle (title) {
    projectTitles.push(title)
}

function getTitles () {
    return projectTitles;
}

export {addTitle, getTitles};
