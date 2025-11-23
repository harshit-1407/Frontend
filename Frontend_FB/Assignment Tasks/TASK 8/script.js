async function getRandomImages() {
  let imageLinks = [];
  for (let i = 0; i < 6; i++) {
    imageLinks.push(`https://picsum.photos/300/300?random=${Math.random()}`);
  }
  return imageLinks;
}

async function addImages() {
  const galleryDiv = document.getElementById("gallery");
  const images = await getRandomImages();

  images.forEach(link => {
    const box = document.createElement("div");
    box.className = "img-box";

    const img = document.createElement("img");
    img.src = link;

    box.appendChild(img);
    galleryDiv.appendChild(box);
  });
}

// Initial load
addImages();

// Button event
document.getElementById("loadBtn").addEventListener("click", addImages);
