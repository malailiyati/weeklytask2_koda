//promise yaitu perwakilan dari suatu nilai yang belum tentu diketahui nilainya saat promise dibuat
const fetchData = (status) => {
  //fungsi yang menerima satu paramenter
  return new Promise((resolve, reject) => {
    //mengembalikan promise(berhasil ataupun gagal)
    if (status) {
      //jika status true
      setTimeout(() => {
        //delay 3 detik
        resolve("Data berhasil disimpan"); //menampilkan tek tersebut
      }, 3000);
    } else {
      //jika status false
      reject("Gagal mengambil data"); //menampilkan teks tersebut
    }
  });
};

//async await : fitur untuk mempermudah dalam menangani proses asynchronous
//try-catch : untuk mengatasi error pada async/await
async function getData() {
  try {
    //mencoba jalankan
    const status = await fetchData(true); //tunggu hasil dari fetchData
    console.log(status); //menampilkan "Data berhasil disimpan"
  } catch (err) {
    //kalau error ditangkap disini
    console.log(err); //menampilkan "Gagal memuat Data"
  }
}

module.exports = { fetchData, getData };
