
function handleCommentsClick(){
      fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res=>res.json())
      .then(data => displayComments(data))
}

function displayComments(comments){
      const commentsContainer = document.getElementById("post-container");
      commentsContainer.classList.add('comments');

      for(const comment of comments.slice(0,10)){
            const div = document.createElement("div");
            div.classList.add("comment");

            const h3 = document.createElement("h3");
            div.appendChild(h3);
            const p = document.createElement("p");
            div.appendChild(p);

            div.innerHTML = `<p>${comment.id}</p><h3>${comment.title}</h3><p>${comment.body}</p>`;

            commentsContainer.appendChild(div);
      }

}