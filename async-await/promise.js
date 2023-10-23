const promise1=new Promise((resolve,reject)=>{
    // resolve("veriler alındı")
    reject("Bir hata oluştu")
})

console.log(promise1)

promise1
    .then((value)=>{
        console.log(value)
    }).catch((err)=>{
        console.log(err)
    })