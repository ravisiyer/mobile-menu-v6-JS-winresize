const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenuCloseBtn = document.getElementById("mobile-menu-close-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    if (
      mobileMenu.style.display === "none" ||
      mobileMenu.style.display === ""
    ) {
      hamburgerBtn.style.display = "none";
      mobileMenu.style.display = "flex";
      mobileMenuCloseBtn.style.display = "block";
    } else {
      hamburgerBtn.style.display = "block";
      mobileMenu.style.display = "none";
      mobileMenuCloseBtn.style.display = "none";
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      hamburgerBtn.style.display = "none";
      mobileMenu.style.display = "none";
      mobileMenuCloseBtn.style.display = "none";
    } else {
      if (
        mobileMenuCloseBtn.style.display === "none" ||
        mobileMenuCloseBtn.style.display === ""
      )
        hamburgerBtn.style.display = "block";
    }
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenuCloseBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
  window.onresize = handleResize;
};

document.addEventListener("DOMContentLoaded", initApp);
