document.addEventListener("DOMContentLoaded", function () {
  document.body.innerHTML += '<div class="scrollTop"><img src="up.png"/></div>';
  var scrollToTopBtn = document.querySelector(".scrollTop");

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
});
