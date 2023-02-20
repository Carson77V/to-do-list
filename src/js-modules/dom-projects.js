// Returns the DOM element of a menu-item 
// a simple project is added to the list on the DOM
export default function createMenuItem(title) {
    const div = document.createElement('div')
    div.classList.add('menu-item')
    div.textContent = title
    return div
}