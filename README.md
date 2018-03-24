# ysSlider.js
ysSlider.js is a slider made with JavaScript. No additional components are needed.

# How to use
1.Download the necessary files.

2.Add files to the project.

```html
<script src="js/ysSlider.js"></script>
<link rel="stylesheet" href="css/ysSlider.css" />
```

3.Start using it.

```html
<div id="ysSlider">
<div class="item"><img src="https://unsplash.it/600/300?image=0" alt="First image" /></div>
<div class="item"><img src="https://unsplash.it/600/300?image=1" alt="Second image" /></div>
<div class="item"><img src="https://unsplash.it/600/300?image=2" alt="Third image" /></div>
<div class="item"><img src="https://unsplash.it/600/300?image=3" alt="Fourth image" /></div>
<div class="item"><img src="https://unsplash.it/600/300?image=4" alt="Fifth image" /></div>
<div class="item"><img src="https://unsplash.it/600/300?image=5" alt="Sixth image" /></div>
<div class="item"><img src="https://unsplash.it/600/300?image=6" alt="Seventh image" /></div>
<div class="item"><img src="https://unsplash.it/600/300?image=7" alt="Nineth image" /></div>
<div id="ysControlBar">
    <a href="javascript:void(0);" class="prev">Prev</a>
    <a href="javascript:void(0);" class="next">Next</a>
</div>
</div>
```

```javascript
var mySlider = new ysSlider();

document.querySelector(".prev").onclick = function () {
    mySlider.prev();
}

document.querySelector(".next").onclick = function () {
    mySlider.next();
}
```

# Demo
www.yusufsezer.com/projects/ysSlider/

# License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details

Created by [Yusuf SEZER](http://www.yusufsezer.com)