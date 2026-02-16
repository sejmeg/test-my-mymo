document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.replace(/\/$/, "");

  document.querySelectorAll(".category-list a").forEach((link) => {
    const li = link.closest("li");
    if (!li) return;

    const linkPath = new URL(link.href).pathname.replace(/\/$/, "");

    if (currentPath === linkPath) {
      li.classList.add("current-ctg");
    } else {
      li.classList.remove("current-ctg");
    }
  });
});
