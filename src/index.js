import { addTitle, getTitles, deleteTitle} from "./js-modules/projects.js";

addTitle("tester")
addTitle("tester2")
addTitle("tester3")
console.log(getTitles())
deleteTitle("tester2")
console.log(getTitles())
