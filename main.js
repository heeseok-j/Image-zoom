"use strict";

const target = document.querySelector(".target");
const zoom = target.dataset.zoom;
const targetWidth = target.clientWidth;
const targetHeight = target.clientHeight;

// wrap
const wrap = document.querySelector(".wrap");
// wrapに追加するdivとclassName
const magnify = document.createElement("div");
magnify.className = "magnifier";
// css 追加
magnify.style.backgroundImage = "url(/img/picture.png)";
magnify.style.backgroundRepeat = "no-repeat";
// zoom拡大率
magnify.style.backgroundSize = `${targetWidth * zoom}px ${
  targetHeight * zoom
}px`;
// 作成したmagnifyをwrapに追加
wrap.prepend(magnify);

const magnifier = document.querySelector(".magnifier");

wrap.addEventListener("mousemove", (e) => {
  // mouse位置からmagnifyを引いて、マウス座標を得る
  const targetRect = target.getBoundingClientRect();
  const mouseX = e.clientX - targetRect.left;
  const mouseY = e.clientY - targetRect.top;

  const eTargetWidth = target.clientWidth;
  const eTargetHeight = target.clientHeight;

  const magnifierWidth = magnifier.clientWidth;
  const magnifierHeight = magnifier.clientHeight;

  // mouseがtargetから離れたら
  if (
    mouseX < eTargetWidth &&
    mouseY < eTargetHeight &&
    mouseX > 0 &&
    mouseY > 0
  ) {
    magnifier.style.display = "block";
  } else {
    magnifier.style.display = "none";
  }

  //　拡大鏡が存在するなら
  if (magnifier.style.display === "block") {
    // 3

    // 既にbackground-sizeからイメージが拡大されているため、マウスポインターも倍率設定
    const eMagnificationX = -(mouseX * zoom - magnifierWidth / 2);
    const eMagnificationY = -(mouseY * zoom - magnifierHeight / 2);

    // 拡大鏡のセンター
    const magnifierCenterX = mouseX - magnifierWidth / 2;
    const magnifierCenterY = mouseY - magnifierHeight / 2;

    // 拡大鏡に設定
    magnifier.style.left = `${magnifierCenterX}px`;
    magnifier.style.top = `${magnifierCenterY}px`;
    magnifier.style.backgroundPosition = `${eMagnificationX}px ${eMagnificationY}px`;
  }
});
