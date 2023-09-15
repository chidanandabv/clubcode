const allImages = document.querySelectorAll(".images .img");
const lightbox = document.querySelector(".lightbox");
const closeImgBtn = lightbox.querySelector(".close-icon");

allImages.forEach(img => {
    // Calling showLightBox function with passing clicked img src as argument
    img.addEventListener("click", () => showLightbox(img.querySelector("img").src));
});

const showLightbox = (img) => {
    // Showing lightbox and updating img source
    lightbox.querySelector("img").src = img;
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
}

closeImgBtn.addEventListener("click", () => {
    // Hiding lightbox on close icon click
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
});