
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

}

