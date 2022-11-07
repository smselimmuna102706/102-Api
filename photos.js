
function handlePhotoClick() {
      fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => displayPhoto(data))
}

function displayPhoto(photos) {
      const photoContainer = document.getElementById("post-container");
      photoContainer.classList.add('photos');

      for (const photo of photos.slice(0, 10)) {
            const div = document.createElement("div");
            div.classList.add("photo");

            // const h2 = document.createElement("h2");
            // div.appendChild(h2);
            // const p = document.createElement('p');
            // div.appendChild(p);
            const img = document.createElement('img');
            img.src = photo.url;
            photoContainer.appendChild(img);



      }

}