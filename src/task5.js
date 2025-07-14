const fs = require("fs"); //untuk menyimpan dan mengambil file
const readline = require("readline"); //menerima input user
const path = require("path"); // hal-hal berkaitan dengan file paths
const filePath = path.join(__dirname, "data.json"); //path ke file data.json

//ambil input (ketikan user) dan output(tampilan di terminal)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//fungsi utama program
function main() {
  rl.question("what do you want to do? (add/delete/change/see): ", (action) => {
    //pertanyaan ke user
    if (action === "add") {
      //kalau user pilih add
      rl.question("add data:", (newData) => {
        try {
          const raw = fs.readFileSync(filePath, "utf8"); //membaca file
          const data = JSON.parse(raw); //mengubah file menjadi array

          data.push(newData); //menambahkan data baru ke array

          fs.writeFileSync(filePath, JSON.stringify(data, null, 1)); //menulis ulang file dengan data yang baru
          console.log("successfully added new item"); //jika berhasil
        } catch (err) {
          console.log(err.message); //pesan error jika terjadi error
        }
        rl.close(); //menutup input
      });
    } else if (action === "delete") {
      //jika user memilih delete
      rl.question("enter the item you want to delete: ", (target) => {
        //item yang akan dihapus
        try {
          const raw = fs.readFileSync(filePath, "utf8"); //membaca file
          let data = JSON.parse(raw); //mengubah isi file menjadi array

          const awal = data.length; //menyipan jumlah data sebelum dihapus
          data = data.filter((item) => item !== target); //menghapus item yang cocok

          if (data.length === awal) {
            //jika item tidak ditemukan
            console.log("item not found");
          } else {
            //menyimpan data baru ke file
            fs.writeFileSync(filePath, JSON.stringify(data, null, 1));
            console.log("item deleted successfully");
          }
        } catch (err) {
          //menangani error
          console.log(err.message);
        }
        rl.close(); //menutup input
      });
    } else if (action === "change") {
      //jika user memilih change
      rl.question("enter the item you want to change: ", (target) => {
        //input item yang ingin diubah
        rl.question("new item: ", (newItem) => {
          //item baru
          try {
            const raw = fs.readFileSync(filePath, "utf8"); //membaca file
            const data = JSON.parse(raw); //mengubah isi file menjadi array

            const index = data.findIndex((item) => item === target); //menacari item yang ingin diubah

            if (index === -1) {
              //item tidak ditemukan
              console.log("item not found");
            } else {
              //mengganti data lama dengan data baru
              data[index] = newItem;
              fs.writeFileSync(filePath, JSON.stringify(data, target, 1)); //menyimpan data baru ke file
              console.log("item update successfully");
            }
          } catch (err) {
            //menangani error
            console.log(err.messege);
          }
          rl.close();
        });
      });
    } else if (action === "see") {
      //jika user memilih see
      try {
        const data = fs.readFileSync(filePath, "utf8"); //membaca file
        console.log(data); //menampilkan isi file
      } catch (err) {
        console.log(err.message); //menangani error
      }
      rl.close();
    } else {
      //jika aksi tidak dikenali
      console.log("unknown action");
      rl.close();
    }
  });
}

module.exports = main; //eksport
