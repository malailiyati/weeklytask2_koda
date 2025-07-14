//import fungsi
const { fetchData, getData } = require("./src/task1.js");
const { getDataFromServer, processData } = require("./src/task2.js");
const getNameAndDomisili = require("./src/task3.js");
const divideAndSort = require("./src/task4.js");
const main = require("./src/task5.js");

//pemanggilan fungsi
//then-catch : untuk menagatasi error(error handling) dari promise
fetchData(true) //memanggil fungsi dengan status true
  .then((status) => {
    //jika berhasil/resolve
    console.log(status); //menampilkan "Data berhasil disimpan"
  })
  .catch((err) => {
    //jika gagal/reject
    console.log(err); //menampilkan "Gagal mengambil data"
  });
getData();

getDataFromServer(true, processData);

getNameAndDomisili();

divideAndSort(5956560159466056);

main();
