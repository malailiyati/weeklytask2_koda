//import fungsi
const { fetchData, getData } = require("./src/task1.js");
const { getDataFromServer, processData } = require("./src/task2.js");
const getNameAndDomisili = require("./src/task3.js");
const divideAndSort = require("./src/task4.js");
const main = require("./src/task5.js");

//pemanggilan fungsi
fetchData(true)
  .then((status) => {
    console.log(status);
  })
  .catch((err) => {
    console.log(err);
  });
getData();

getDataFromServer(true, processData);

getNameAndDomisili();

divideAndSort(5956560159466056);

main();
