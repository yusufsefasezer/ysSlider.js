/*
 *    ysSlider.js - Simple JavaScript Slider
 *    Author: Yusuf SEZER <yusufsezer@mail.com>
 *    Version: v0.1.0
 *    Url: https://github.com/yusufsefasezer/ysSlider.js
 *    License(s): MIT
 */
(function () {

  var countSlide, currentSlide;

  ysSlider = function () {
    countSlide = 0;
    currentSlide = 0
    this.items = {};
    this.options = {
      sliderContainer: "#ysSlider",
      slideClassName: ".item",
      slideControl: "#ysControlBar"
    };

    Object.assign(this.options, arguments[0]);

    init.call(this);
    showSlide.call(this);
  }

  function init() {
    var sliderParent = document.querySelector(this.options.sliderContainer);
    if (sliderParent == null) {
      throw "The settings are incorrect";
      return;
    }

    sliderParent.className = "ysSlider";
    this.items = sliderParent.querySelectorAll(this.options.slideClassName);

    sliderParent.querySelector(this.options.slideControl).className = "ysControlBar";
    countSlide = this.items.length;
  };

  function showSlide() {

    for (i = 0; i < countSlide; i++) {
      this.items[i].style.display = "none";
    }

    if (currentSlide >= countSlide) currentSlide = 0;

    if (currentSlide < 0) currentSlide = countSlide - 1;

    this.items[currentSlide].style.display = "block";
  }

  ysSlider.prototype = {
    next: function () {
      currentSlide++;
      showSlide.call(this);
    },
    prev: function () {
      currentSlide--;
      showSlide.call(this);
    }
  }

})();
