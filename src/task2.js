const getDataFromServer = (status, callback) => {
  if (status) {
    //jika status true
    setTimeout(() => {
      //tunggu 3 detik dan kirim products
      const products = ["Produck 1", "produck 2", "Produck 3"];
      callback(products, null);
    }, 3000);
  } else {
    //jika status false
    const err = new Error("Failed to fetch data"); //menampilkan error
    callback(null, err); //
  }
};

//fungsi callback menangani data dan error
function processData(data, err) {
  try {
    //coba jalankan
    if (err) throw err; //jika ada error langsung dilempar ke catch
    console.log(data); //jika tidak ada error tampilkan data/products
  } catch (err) {
    //menangkap error
    console.log(err.message); //menampilkan pesan error
  }
}

module.exports = { getDataFromServer, processData };
