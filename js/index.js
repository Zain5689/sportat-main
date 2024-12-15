AOS.init({
  duration: 1200,
  once: true,
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));

    this.classList.add("active");
  });
});

document.addEventListener("click", function (event) {
  const navbarNav = document.getElementById("navbarNav");
  const isNavbarTogglerClicked = event.target.closest(".navbar-toggler");

  if (navbarNav.classList.contains("show") && !isNavbarTogglerClicked) {
    const clickedInsideNav = event.target.closest(".navbar-collapse");
    if (!clickedInsideNav) {
      const navbarToggler = document.querySelector(".navbar-toggler");
      navbarToggler.click();
    }
  }
});
