# ysSlider.js
ysSlider is an easy-to-use slideshow plug-in that works on almost any browser without the need for any plug-ins.

**ysSlider.js** is an exceptional JavaScript library that serves as a vital tool for developers who crave simplicity and efficiency. This remarkable **vanilla slider** allows users to effortlessly create stunning slideshows without the need for any pesky plug-ins or additional libraries. Its seamless compatibility is truly unparalleled, as it smoothly integrates into almost any browser, guaranteeing a flawless user experience every time.

One of the standout features of ysSlider.js is its ability to seamlessly adapt to various devices. Regardless of whether your audience is browsing on a desktop, laptop, tablet, or smartphone, this **JavaScript slider library** ensures that your slideshow retains its impeccable functionality and visual appeal. With ysSlider.js, your content will consistently look striking and professional, regardless of the screen size or device orientation.

As a developer, you will undoubtedly appreciate the user-friendliness of ysSlider.js. Creating a stunning slideshow is as simple as pie. By generating the HTML markup and implementing it into your project, you can immediately start using ysSlider.js, saving you valuable time and effort. No complex configuration or meticulous setup required – just pure simplicity and efficiency.

Furthermore, ysSlider.js, being an invaluable **JavaScript slider plugin**, boasts full support for animate.css. This means that you can effortlessly apply captivating animations to your slides, elevating the visual appeal of your content and engaging your audience in an immersive experience. The combination of ysSlider.js and animate.css creates a visually stunning and dynamic slideshow that is sure to captivate your users.

This remarkable **slider plugin** offers an extensive range of configuration options, ensuring that your slides align perfectly with your project's unique requirements. With ysSlider.js, you have the power to customize slide transitions, navigation controls, autoplay settings, and much more. The extensive configurability empowers you as a developer to create a truly personalized and tailored slideshow.


## [Download](https://github.com/yusufsefasezer/ysSlider.js/archive/master.zip) / [Demo](https://www.yusufsezer.com/projects/ysslider-js/) / [yusufsezer.com](https://www.yusufsezer.com)

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

Created by [Yusuf Sezer](https://www.yusufsezer.com)
