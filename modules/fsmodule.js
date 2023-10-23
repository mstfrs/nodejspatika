const fs = require("fs");

//Dosya Okumak

// fs.readFile("password.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
//   console.log("Dosya Okundu");
// });

//Dosya Yazmak

// fs.writeFile(
//   "example.json",
//   '{"name":"Mustafa", "age":"36"}',
//   "utf8",
//   (err, data) => {
//     if (err) console.log(err);
//     console.log("Dosya başarılı bir şekilde oluşturuldu");
//   }
// );

//Dosyaya veri Eklemek

// fs.appendFile('example.json', '{"name":"Seyhan", "age":"36"}', 'utf8',(err)=>{
//     if(err)console.log(err)
//     console.log("Veri Eklendi")
// });

//Dosya silmek

// fs.unlink("example.json",(err)=>{
//     if(err)console.log(err)
//     console.log("Dosya silindi")
// })




/// Klasörler Oluşturmak

// fs.mkdir("uploads/img",{recursive:true},(err)=>{
//     if (err)console.log(err)
//     console.log("Klasörler oluşturuldu")
// })


//Klasörler silmek

// fs.rmdir("uploads",{recursive:true},(err)=>{
//     if (err)console.log(err)
//     console.log("Klasörler silindi")
// })