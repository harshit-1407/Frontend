let images = [
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=2",
    "https://picsum.photos/400/300?random=3",
    "https://picsum.photos/400/300?random=4",
    "https://picsum.photos/400/300?random=5"
];

let index = 0;

let slide = document.getElementById("slide");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

// pehli image
slide.src = images[index];

function showNext() {
    index = (index + 1) % images.length;
    slide.src = images[index];
}

function showPrev() {
    index = (index - 1 + images.length) % images.length;
    slide.src = images[index];
}

// Buttons
next.addEventListener("click", showNext);
prev.addEventListener("click", showPrev);

// 3 sec ke baad hoga slide
let autoSlide = setInterval(showNext, 3000);

// hover pr rukega
slide.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});

slide.addEventListener("mouseleave", () => {
    autoSlide = setInterval(showNext, 3000);
});
