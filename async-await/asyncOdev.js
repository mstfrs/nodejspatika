const posts = [
  { title: "title1", desc: "1.Postu oluşturmaya hazır mısınız?" },
  { title: "title2", desc: "2.Postu oluşturmaya hazır mısınız?" },
  { title: "title3", desc: "3.Postu oluşturmaya hazır mısınız?" },
];

const addPost = (newPost) => {
  const promisePost = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve("post eklendi");
  });
  return promisePost;
};

const listPost = () => {
  posts.map((post) => {
    console.log(post);
  });
};

async function showBlog() {
  try {
    addPost({ title: "title4", desc: "4.Postu oluşturmaya hazır mısınız?" });
    listPost();
  } catch (error) {
    console.log(error);
  }
}

showBlog();
