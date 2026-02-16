document.addEventListener("click", function (e) {
  const link = e.target.closest("[data-target]");
  if (!link) return;

  e.preventDefault();

  // archive内のright-containerだけ取得
  const container = document.querySelector(".archive .right-container");
  if (!container) return;

  const id = link.dataset.target;
  const target = document.getElementById(id);
  if (!target) return;

  const scrollAmount = target.offsetTop - container.offsetTop;

  container.scrollTo({
    top: scrollAmount,
    behavior: "smooth",
  });
});

document.addEventListener("click", function (e) {
  const link = e.target.closest("[data-target]");
  if (!link) return;

  e.preventDefault();

  const container = document.querySelector(".archive .right-container");
  if (!container) return;

  const id = link.dataset.target;
  const target = document.getElementById(id);
  if (!target) return;

  /* ------------------------------
     ① 左側 current-achv 切り替え
  ------------------------------ */

  document.querySelectorAll(".archive-list li").forEach((li) => {
    li.classList.remove("current-achv");
  });

  link.closest("li").classList.add("current-achv");

  /* ------------------------------
     ② 右側 is-disabled 切り替え
  ------------------------------ */

  document.querySelectorAll(".post-item").forEach((item) => {
    if (item.dataset.month === id) {
      item.closest("a")?.classList.remove("is-disabled");
    } else {
      item.closest("a")?.classList.add("is-disabled");
    }
  });

  /* ------------------------------
     ③ スクロール処理
  ------------------------------ */

  const scrollAmount = target.offsetTop - container.offsetTop;

  container.scrollTo({
    top: scrollAmount,
    behavior: "smooth",
  });
});
