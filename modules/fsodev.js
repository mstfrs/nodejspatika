const fs=require("fs")


//CREATE

// fs.writeFile("employees.json",'{"name": "Employee 1 Name", "salary": 2000}',(err)=>{
//     if(err)console.log(err)
//     console.log("Dosya Oluşturuldu")
// })


//READ

// fs.readFile("employees.json","utf8",(err,data)=>{
//     if(err)console.log(err)
//     console.log(data)

// })

//UPDATE

// fs.appendFile("employees.json",'{"name": "Employee 2 Name", "salary": 1000}',(err)=>{
//     if(err)console.log(err)
//     console.log("Veriler Güncellendi")
// })

//DELETE

// fs.unlink("employees.json",(err)=>{
//     if(err)console.log(err)
//     console.log("Dosya Silindi")
// })