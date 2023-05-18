# Image-zoom
 イメージを倍率で見れます
 
 <div align=center>
 
 
 [![project](https://user-images.githubusercontent.com/89200643/239223752-8d223d22-b4e0-4fc2-8223-48c1846a932e.png)](https://heeseok-j.github.io/Image-zoom/)
 
 ↪イメージ**クリック**すると自動的にサイトに入ります↩
 </div>
 
</br>

## URL
 https://heeseok-j.github.io/Image-zoom/
 </br>
 ▶拡大ができない場合、F5又はリフレッシュ(更新)してください。

</br>

## 1. プロジェクトの理由
 久々にアマゾンから物を購入し、</br>
 商品が拡大できる機能のコードはどう書くかと気になって作ってみました。
 </br>
 </br>
 <img src="https://user-images.githubusercontent.com/89200643/239224279-c960b330-8788-46bf-916d-aac870e6b2e3.png">
 </br>
 ⬆⬆これが、実際に買ったものです⬆⬆
 
</br>

## 2. 期間
 2023年5月17日~2023年5月18日
 
</br>

## 3. 使用技術
- HTML
- CSS
- Javascript

</br>

## 4. トラブルシューティング

</br>
<details>
<summary><b>問題点と改善</b></summary>
<div markdown="1">
 
### 4-1. イベントハンドラー
 
 最初はイメージ(target)に直接ハンドラーしたらマウスポインターが</br>
 拡大鏡から離れないと次に動かない問題がありました。</br>
 
 ```javascript
 target.addEventListener("mousemove", (e) => {
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

 ```
 
 なぜtargetには動きが正しく作動できなかったかはわからない状態ですが、</br>
 これを直すためにtargetじゃなくてwrapにイベントハンドラーしたら解決できました。
 
 ```javascript
 wrap.addEventListener("mousemove", () => {
 //上記と同じコード
 });
 ```
 
 
  </div>
</details>

