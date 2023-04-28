const allPostsBtn = document.getElementById("allPosts")
const postWithID10Btn = document.getElementById("postWithID10")
const createPostBtn = document.getElementById("createPost")
const replacePostBtn = document.getElementById("replacePost")
const updateTitleBtn = document.getElementById("updateTitle")
const deletePostBtn = document.getElementById("deletePost")
const displayData = document.getElementById("display")

function display(data) {
    displayData.innerHTML = "";
    data.map(post => {
      let div = document.createElement("div")
      div.classList.add("post")
      let h3 = document.createElement("h3")
      h3.innerText = post.title
      div.append(h3)
      let h4 = document.createElement("h4")
      h4.innerHTML = post.id
      div.append(h4)
      let p = document.createElement("p")
      p.innerText = post.body
      div.append(p)
      displayData.append(div)
    });
  }
  
  function displayDelete() {
    displayData.innerHTML = "";
    let div = document.createElement("div")
    div.classList.add("post")
    let h3 = document.createElement("h3")
    h3.innerText = "Deleted Post."
    div.append(h3)
    displayData.append(div);
  }
  
  let allPosts = () =>
    fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => response.json()).then(json => display(json))
    allPostsBtn.addEventListener("click", () => {
        allPosts()
      });
      
  
  let postWithID10 = id =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json()).then(json => display([json]))
    postWithID10Btn.addEventListener("click", () => { 
        postWithID10(10);
      });
  
  let createPost = () =>
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "New Post",
        body: "New Post",
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => { display([json]) 
        console.log(json.id)
      });
      createPostBtn.addEventListener("click", () => {
        createPost();
      });
  
  let replacePost = id =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: `Replaced Post #12`,
        body: "Replaced Post",
        userId: 2
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => display([json]))
      replacePostBtn.addEventListener("click", () => {
        replacePost(12);
      });
  
  let updateTitle = (id, title) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        body:
         ""
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then( json => display([json]))
      updateTitleBtn.addEventListener("click", () => {
      updateTitle(12, "Replaced Title");
      });
  let deletePost = id =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(json => displayDelete([json]))
      deletePostBtn.addEventListener("click", () => {
        deletePost(12);
  });


