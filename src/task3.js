const url = "https://jsonplaceholder.typicode.com/users"; //url API

//fungsi async
async function getNameAndDomisili() {
  try {
    const response = await fetch(url); //mengambil data dari API
    if (!response.ok) throw new Error(response.status); //kalau respon gagal lempar ke error
    const getData = await response.json(); //ubah response menjadi json
    getData.sort((a, b) => a.address.city.localeCompare(b.address.city)); //mengurutkan data berdasarkan nama kota
    const result = await Promise.all(
      //mappingg
      getData.map(async (data) => {
        return {
          name: data.name, //ambil nama user
          domisili: data.address.city, //ambil kota dari address
        };
      })
    );
    console.log(result); //menampilkan hasil akhir
  } catch (err) {
    //jika error
    console.log(err);
  }
}

module.exports = getNameAndDomisili;
