
function handlePostClick(){
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res=>res.json())
      .then(data => displayPost(data))
}

function displayPost(posts){
      const postContainer = document.getElementById("post-container");
      postContainer.classList.add('posts');

      for(const post of posts.slice(0,10)){
            const div = document.createElement("div");
            div.classList.add("post");

            const h3 = document.createElement("h3");
            div.appendChild(h3);
            const p = document.createElement("p");
            div.appendChild(p);

            div.innerHTML = `<p>${post.id}</p><h3>${post.title}</h3><p>${post.body}</p>`;

            postContainer.appendChild(div);
      }

}