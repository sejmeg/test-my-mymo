document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".site-logo");

  if (document.body.classList.contains("home")) {
    requestAnimationFrame(() => {
      logo.classList.add("is-visible");
    });
  }
});
