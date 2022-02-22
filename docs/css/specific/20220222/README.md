# 实现动态炫彩边框

## 介绍

使用 `clip-path` 和 `border-image` 实现圆角渐变边框。`border-image` 用来指定作为元素周围边框的图像：`clip-path` `CSS` 属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。剪切区域是被引用内嵌的 `URL` 定义的路径或者外部 `SVG` 的路径。因为使用了 `clip-path` 裁剪后的元素，只有元素的剪切区域才能被显示，所以我们可以通过 `clip-path: inset()` 裁剪出带圆角的矩形元素。

## 代码

```html
<h1 class="border-image-clip-path"></h1>

<style>
.border-image-clip-path {
  width: 200px;
  height: 100px;
  margin: auto;
  border: 10px solid;
  border-image: linear-gradient(45deg, gold, deeppink) 1;
  clip-path: inset(0px round 10px);
  animation: huerotate 6s infinite linear;
  filter: hue-rotate(360deg);
}
@keyframes huerotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rorate(360deg);
  }
}

</style>
```