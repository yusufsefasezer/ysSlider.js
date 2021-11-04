# ysSlider.js
ysSlider is an easy-to-use slideshow plug-in that works on almost any browser without the need for any plug-ins.

## [Download](https://github.com/yusufsefasezer/ysSlider.js/archive/master.zip) / [Demo](#) / [yusufsezer.com](http://www.yusufsezer.com)

## Why should I use ysSlider.js?
* No need any plug-in - does not need any plugin or library.
* Responsive - Works on almost any devices.
* Easy to use - Create the HTML markup and start using it.
* Animate.css support - Easily apply animations with animate.css to your slides.
* Configurable - You can configure your slides options.

## How to use

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code.

### 1. Include ysSlider on your site

```html
<script src="path/to/ysslider.js"></script>
<link rel="stylesheet" href="path/to/ysslider.css" />
```

### 2. Create HTML markup
Create a `<div class="ysslider">` element, with a `<div class="item">` for each slide. Slides can contain images, video, or any other HTML content!

```html
<div class="ysslider">
  <div class="item"><img src="https://unsplash.it/600/300?image=0" /></div>
  <div class="item"><img src="https://unsplash.it/600/300?image=1" /></div>
  <div class="item"><img src="https://unsplash.it/600/300?image=2" /></div>
  <div class="item"><img src="https://unsplash.it/600/300?image=3" /></div>
  <div class="controlbar">
    <a href="javascript:void(0);" class="prev">Prev</a>
    <a href="javascript:void(0);" class="next">Next</a>
  </div>
</div>
```
### 3. Initialize ysSlider
In the footer of your page, after the content, initialize ysSlider. And that's it, you're done. Nice work!

```javascript
var mySlider = new ysSlider();

document.querySelector(".prev").onclick = function () {
  mySlider.prev();
}

document.querySelector(".next").onclick = function () {
  mySlider.next();
}
```

## ES6 Modules

ysSlider does not have a default export, but does support CommonJS and can be used with native ES6 module imports.

```javascript
import('path/to/ysslider.js')
  .then(function () {
    var mySlider = new ysSlider();
  });
``` 

It uses a UMD pattern, and should also work in most major module bundlers and package managers.

## Working with the Source Files

If you would prefer, you can work with the development code in the `src` directory using the included [Gulp build system](http://gulpjs.com/). This compiles and minifies code.

### Dependencies
Make sure these are installed first.

* [Node.js](http://nodejs.org)
* [Gulp](http://gulpjs.com) `sudo npm install -g gulp`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files.
3. When it's done installing, run one of the task runners to get going:
	* `gulp` manually compiles files.
	* `gulp watch` automatically compiles files.

## Options and Settings

ysSlider includes smart defaults and works right out of the box. But if you want to customize things, it also has a robust API that provides multiple ways for you to adjust the default options and settings.

### Global Settings

You can pass options and callbacks into ysSlider through the `init()` function:

```javascript
var mySlider = new ysSlider({
    wrapper: '.ysslider', // Slider wrapper
    itemClass: '.item', // Slider item class
    animate: false, // If true, animation support will be added
    auto: false, // If true, will automatically slide show
    pause: 2000, // The amount of time (in ms) between each auto slide show
    controls: true, // If true, controls will be added
    controlBar: '.controlbar', // Control class
    touch: false  // If true, touch support will be added
});
```

### Use ysSlider events in your own scripts

You can also call ysSlider events in your own scripts.

#### init()
Initialize ysSlider. This is called automatically when you setup your `new ysSlider` object, but can be used to reinitialize your instance.

```javascript
var mySlider = new ysSlider();

mySlider.init({
    animate: true,
    auto: true
});
```

#### show()
Show to the supplied slide index (zero-based)

```javascript
var mySlider = new ysSlider();

mySlider.show(2);
```

#### next()
Show to the next slide.

```javascript
var mySlider = new ysSlider();

mySlider.next();
```

#### prev()
Show to the prev slide.

```javascript
var mySlider = new ysSlider();

mySlider.prev();
```

#### getCurrentSlide()
Returns the current slide index in the slider.

```javascript
var mySlider = new ysSlider();

var currentSlide = mySlider.getCurrentSlide();
```

#### getSlideCount()
Returns the total number of slides in the slider

```javascript
var mySlider = new ysSlider();

var slideCount = mySlider.getSlideCount();
```

#### destroy()
Destroy the current `ysSlider.init()`. This is called automatically during the `init` function to remove any existing initializations.

```javascript
var mySlider = new ysSlider();

mySlider.destroy();
```

# License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details

Created by [Yusuf SEZER](http://www.yusufsezer.com)
