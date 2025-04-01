// Function to toggle dropdown visibility
function toggleDropdown(id) {
    var content = document.getElementById(id);
    content.style.display = (content.style.display === "block") ? "none" : "block";
}

// Add event listeners for FAQ items
document.addEventListener("DOMContentLoaded", function () {
    // FAQ toggle using the same function
    var faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(function (item) {
        item.addEventListener("click", function () {
            var answer = item.querySelector(".faq-answer");
            answer.style.display = (answer.style.display === "block") ? "none" : "block";
        });
    });
});

// Initialize AOS with default settings
AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
});

// Optional: Manually refresh AOS on scroll if necessary
window.addEventListener('scroll', function () {
    AOS.refresh();
});



document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Adjust the scroll threshold as needed
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
    });
});


