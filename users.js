
function handleUserClick(){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
      .then(data => displayUsers(data))
}

function displayUsers(users){
      const userContainer = document.getElementById("post-container");
      userContainer.classList.add('users');

      for(const user of users.slice(0,10)){
            const div = document.createElement("div");
            div.classList.add("user");

            const h3 = document.createElement("h3");
            div.appendChild(h3);
            const p = document.createElement("p");
            div.appendChild(p);

            div.innerHTML = `<p>${user.id}</p><h3>${user.name}</h3><p>${user.email}</p>`;

            userContainer.appendChild(div);
      }

}