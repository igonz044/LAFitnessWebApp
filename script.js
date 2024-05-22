// const initSlider = () => {
    function initSlider(){
    let imageList = document.querySelector(".image-list");
    let slideButtons = document.querySelectorAll(".prev, .next");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    //Slide images according to button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            // console.log(butto
            const direction = button.id == "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
    //Hide next or prev button
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}

window.addEventListener("load", initSlider);