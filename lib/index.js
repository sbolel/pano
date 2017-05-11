'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import PANOLENS from 'panolens.js'

// with css-loader we can load css files as part of the code and it will bundle all of them into one css file for us
// import './normalize.css'

var Element = function () {
  _createClass(Element, null, [{
    key: 'getConfig',
    value: function getConfig(container) {
      if (!container || typeof container === 'undefined') {
        throw new Error('Pano.Element.getConfig requires a container argument that is a DOM element.');
      }
      return {
        container: container,
        autoHideControlBar: true,
        autoHideInfospot: true,
        controlBar: true,
        controlButtons: ['fullscreen', 'vr'],
        passiveRendering: false
      };
    }
  }]);

  function Element(container) {
    _classCallCheck(this, Element);

    if (!container || (typeof container === 'undefined' ? 'undefined' : _typeof(container)) === undefined) {
      throw new Error('No jQuery pattern for panorama container provided.');
    }
    this.container = container;
    // calculate the aspect ratio for the pano container
    var width = Number(this.container.attributes.width.nodeValue) * 1.0;
    var height = Number(this.container.attributes.height.nodeValue) * 1.0;
    var aspect = height / width;
    var targetHeight = aspect * this.container.parentElement.offsetWidth;
    // set the height of container to calculated target height
    this.container.style.setProperty('height', targetHeight + 'px');
    // set the config
    this.config = Element.getConfig(container);
    // set the img src from container attributes
    this.src = this.container.attributes.src.nodeValue;
    // initialize the panorama and camera
    this.pano = new PANOLENS.ImagePanorama(this.src);
    this.viewer = new PANOLENS.Viewer(this.config);
  }

  _createClass(Element, [{
    key: 'init',
    value: function init() {
      this.viewer.add(this.pano);
      this.appendCaption();
    }
  }, {
    key: 'appendCaption',
    value: function appendCaption() {
      this.caption = this.container.attributes.caption.nodeValue;
      if (this.caption && this.caption !== '') {
        var captionDiv = document.createElement('em');
        captionDiv.appendChild(document.createTextNode(this.caption));
        this.container.appendChild(captionDiv);
      }
    }
  }]);

  return Element;
}();

var Page = function () {
  function Page(containers) {
    _classCallCheck(this, Page);

    if (!containers || typeof containers === 'undefined') {
      throw new Error('No jQuery pattern for panorama container provided.');
    }
    this.panos = [];
    this.elements = document.getElementsByTagName("pano");
    for (var i = 0; i < this.elements.length; i++) {
      this.panos.push(new Element(this.elements[i]));
    }
  }

  _createClass(Page, [{
    key: 'init',
    value: function init() {
      for (var i = 0; i < this.panos.length; i++) {
        this.panos[i].init();
      }
    }
  }]);

  return Page;
}();

var Pano = {
  Element: Element,
  Page: Page
};

exports.Element = Element;
exports.Page = Page;
exports.default = Pano;