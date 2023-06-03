
document.addEventListener("DOMContentLoaded",()=> {
  updatePosts()
})

function updatePosts(){

  fetch("http://localhost:3000/api/all").then( res => {
    return res.json()

  }).then(json =>{

    let postElements = ""
  

    let posts = JSON.parse(json)
    posts.forEach(post => {

      postElement = ` <div  id="${post.id}" class="card mb-4">
      <div class="card-header">
        <h5 class="card-title">${post.title}</h5>
      </div>
      <div class="card-body">
        <div class="text">${post.description}</div>
      </div>
    </div>`

    postElements += postElement

    });

    document.querySelector("#posts").innerHTML = postElements
    
  })

}

function newPost(){
    let title = document.querySelector("#title").value
    let description = document.querySelector("#desc").value

    let post = {title, description}

    const options = {
      method: "POST",
      headers: new Headers({"content-type" : "application/json"}),
      body: JSON.stringify(post)

    }

    fetch("http://localhost:3000/api/new", options).then(res =>{
      console.log(res);
      updatePosts();
      document.querySelector("#title").value = " ";
      document.querySelector("#desc").value = " ";
    })

}

