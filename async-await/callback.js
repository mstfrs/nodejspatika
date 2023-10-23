// console.log("1.görev")
// console.log("2.görev")
// console.log("3.görev")

// const func1=()=>{
//     console.log("1.görev tamamlandı")
// }
// const func2=()=>{
//     console.log("2.görev tamamlandı")
// }
// func2();
// func1();

// const func1=()=>{
//     console.log("1.görev tamamlandı")
//     func2();
// }
// const func2=()=>{
//     console.log("2.görev tamamlandı")
//     func3();
// }
// const func3=()=>{
//     console.log("3.görev tamamlandı")
// }

// func1();

setTimeout(() => {}, 3000);

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

const addBook = (newBook,callback) => {
  books.push(newBook);
  callback();
};

addBook({name: "Kitap4", author: "Yazar4"},listBooks);
