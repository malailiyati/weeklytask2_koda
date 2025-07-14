const divideAndSort = (num) => {
  const str = num.toString().split("0"); //ubah number ke string lalu pisahkan berdasarkan angka 0
  const str2 = str.map((item) => {
    //setiap item hasil split
    return item
      .split("") //pisahkan atau pecah setiap item dari str
      .sort((a, b) => a - b) //urutkan angka dari yang terkecil
      .join(""); //menggabungkan
  });
  const result = Number(str2.join("")); //mengubah menjadi number
  console.log(result); //memanggil hasil akhir
};

module.exports = divideAndSort; //eksport
