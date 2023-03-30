// factory function used to construct task object
const task = (title, description, date, priority) => {
    let obj = Object.create(taskProto)
    obj.title = title
    obj.description = description
    obj.date = date
    obj.priority = priority
    return obj
}

//Great prototype for task() to store all the methods for program to run faster
const taskProto = {
    // create all getters and setters (only for memory use)
    getTitle() {
        return this.title
    },
    setTitle(title) {
        this.title = title
    },
    getDescription() {
        return this.description
    },
    setDescription(description) {
        this.description = description
    },
    getDate() {
        return this.date
    },
    setDate(date) {
        this.date = date
    },
    getPriority() {
        return this.priority
    },
    setPriority(priority) {
        this.priority = priority
    },

}

