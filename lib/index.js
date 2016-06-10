'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = exports.Element = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // we can get this from the window instead through webpack config if you want


var _jQuery = require('jQuery');

var _jQuery2 = _interopRequireDefault(_jQuery);

var _panolens = require('panolens.js');

var _panolens2 = _interopRequireDefault(_panolens);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import './normalize.css' // with css-loader we can load css files as part of the code and it will bundle all of them into one css file for us

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
    // container jquery element
    this.container = (0, _jQuery2.default)(container);
    // calculate and set the height of container from image size
    var width = Number(this.container.attr('width')) * 1.0;
    var height = Number(this.container.attr('height')) * 1.0;
    var aspect = height / width;
    var targetHeight = aspect * this.container.parent().width();
    this.container.css('height', targetHeight + 'px');
    // set the config
    this.config = Element.getConfig(container);
    // get caption
    this.caption = this.container.attr('caption');
    // set the img src from container attributes
    this.src = this.container.attr('src');
    // initialize the panorama and camera
    this.pano = new _panolens2.default.ImagePanorama(this.src);
    this.viewer = new _panolens2.default.Viewer(this.config);
  }

  _createClass(Element, [{
    key: 'init',
    value: function init() {
      this.viewer.add(this.pano);
      if (this.caption) this.container.append('<em>' + this.caption + '</em>'); // add the caption from element attributes
    }
  }]);

  return Element;
}();

var Page = function () {
  function Page(containers) {
    var _this = this;

    _classCallCheck(this, Page);

    if (!containers || typeof containers === 'undefined') {
      throw new Error('No jQuery pattern for panorama container provided.');
    }
    // const self = this
    this.panos = [];
    (0, _jQuery2.default)(containers).each(function (index, elem) {
      // Fat arror passes context, and self was a const
      // self.panos.push(new Element(elem))
      _this.panos.push(new Element(elem));
    });
  }

  _createClass(Page, [{
    key: 'init',
    value: function init() {
      this.panos.forEach(function (panoInstance) {
        return panoInstance.init();
      });
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