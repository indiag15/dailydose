document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll(".photo");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    function showCurrentImage() {
        photos.forEach((photo, index) => {
            if (index === currentIndex) {
                photo.style.display = "block";
            } else { 
                photo.style.display = "none";
            }
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % photos.length;
        showCurrentImage();
    }

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        showCurrentImage();
    }

    nextButton.addEventListener("click", showNextImage);

    prevButton.addEventListener("click", showPreviousImage);

    showCurrentImage();
});