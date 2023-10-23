const books = [
    {
      name: "Kitap1",
      author: "Yazar1",
    },
    {
      name: "Kitap2",
      author: "Yazar2",
    },
    {
      name: "Kitap3",
      author: "Yazar3",
    },
  ];
  
  const listBooks = () => {
    books.map((book) => {
      console.log(book.name);
    });
  };
  
//   const addBook = (newBook,callback) => {
//     books.push(newBook);
//     callback();
//   };
  const addBook = (newBook) => {
    const promise1=new Promise((resolve,reject)=>{
        books.push(newBook);
        resolve(books)
        // reject("hata oluştu")
    })
    
    return promise1;
  };
  
//   addBook({name: "Kitap4", author: "Yazar4"})
//   .then(()=>{
//     console.log("Yeni Liste")
//     listBooks()
//   }).catch((err)=>{
//     console.log(err)
//   })
  
  

 async function showBooks() {

    try {
        await addBook({name: "Kitap40", author: "Yazar40"})
        listBooks();
    } catch (error) {
        console.log(error)
    }

   
    
  }
  showBooks()