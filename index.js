//import fungsi
const fetchData = require("./src/task1.js");
const { getDataFromServer, processData } = require("./src/task2.js");
const getNameAndDomisili = require("./src/task3.js");
const divideAndSort = require("./src/task4.js");
const main = require("./src/task5.js");

fetchData.getData();

getDataFromServer(true, processData);

getNameAndDomisili();

divideAndSort(5956560159466056);

main();
