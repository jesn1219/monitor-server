document.addEventListener("DOMContentLoaded", function() {
    // 슬라이드쇼 배경
    const images = document.querySelectorAll(".slideshow img");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove("show");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("show");
    }

    setInterval(changeImage, 5000);

    // 시간에 따른 인사말
    const greeting = document.querySelector(".content p");
    const hours = new Date().getHours();

    if (hours >= 5 && hours < 12) {
        greeting.textContent = "좋은 아침!";
    } else if (hours >= 12 && hours < 18) {
        greeting.textContent = "좋은 오후!";
    } else {
        greeting.textContent = "좋은 저녁!";
    }
});
