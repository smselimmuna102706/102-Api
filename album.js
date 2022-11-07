
function handleAlbumClick(){
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res=>res.json())
      .then(data => displayAlbum(data))
}

function displayAlbum(albums){
      const albumContainer = document.getElementById("post-container");
      albumContainer.classList.add('albums');

      for(const album of albums.slice(0,10)){
            const div = document.createElement("div");
            div.classList.add("album");

            const h3 = document.createElement("h3");
            div.appendChild(h3);
            const p = document.createElement("p");
            div.appendChild(p);

            div.innerHTML = `<p>${album.id}</p><h3>${album.title}</h3><p>${album.body}</p>`;

            albumContainer.appendChild(div);
      }

}