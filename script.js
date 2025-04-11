/* script.js */
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const content = document.getElementById("transition-content");

  content.classList.add("fade-in");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (!href.startsWith("#") && !this.classList.contains("active")) {
        e.preventDefault();
        content.classList.remove("fade-in");
        content.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 400);
      }
    });
  });
});

