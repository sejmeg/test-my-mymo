window.addEventListener("scroll", function () {
  // スクロール量を取得
  const scroll = window.scrollY;
  // 画面の高さを取得
  const windowHeight = window.innerHeight;
  // すべての.fade-inを取得
  const fadeins = document.querySelectorAll(".fadein");

  fadeins.forEach(function (fadein) {
    // fade-inまでの高さを取得
    const distanceToBox = fadein.offsetTop;
    // 下記条件が成り立つときだけboxにis-activeクラスを付与する
    if (scroll + windowHeight > distanceToBox) {
      fadein.classList.add("is-active");
    }
  });
});

window.addEventListener("DOMContentLoaded", function () {
  const fadeins = document.querySelectorAll(".fadein2");

  setTimeout(function () {
    fadeins.forEach(function (fadein2) {
      fadein2.classList.add("is-active");
    });
  }, 100);
});
