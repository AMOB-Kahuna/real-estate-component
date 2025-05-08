const selectBtn = document.querySelector("#select-btn")
const heartIcon = document.querySelector(".fa-heart")

selectBtn.addEventListener("click", () => {
    heartIcon.classList.toggle("selected")
})