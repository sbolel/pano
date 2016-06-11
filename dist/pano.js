/*! pano.js v1.1.1 | (c) Sinan Bolel & Prescott Prue */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Pano"] = factory();
	else
		root["Pano"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// import PANOLENS from 'panolens.js'\n\n// with css-loader we can load css files as part of the code and it will bundle all of them into one css file for us\n// import './normalize.css'\n\nvar Element = function () {\n  _createClass(Element, null, [{\n    key: 'getConfig',\n    value: function getConfig(container) {\n      if (!container || typeof container === 'undefined') {\n        throw new Error('Pano.Element.getConfig requires a container argument that is a DOM element.');\n      }\n      return {\n        container: container,\n        autoHideControlBar: true,\n        autoHideInfospot: true,\n        controlBar: true,\n        controlButtons: ['fullscreen', 'vr'],\n        passiveRendering: false\n      };\n    }\n  }]);\n\n  function Element(container) {\n    _classCallCheck(this, Element);\n\n    if (!container || (typeof container === 'undefined' ? 'undefined' : _typeof(container)) === undefined) {\n      throw new Error('No jQuery pattern for panorama container provided.');\n    }\n    this.container = container;\n    // calculate the aspect ratio for the pano container\n    var width = Number(this.container.attributes.width.nodeValue) * 1.0;\n    var height = Number(this.container.attributes.height.nodeValue) * 1.0;\n    var aspect = height / width;\n    var targetHeight = aspect * this.container.parentElement.offsetWidth;\n    // set the height of container to calculated target height\n    this.container.style.setProperty('height', targetHeight + 'px');\n    // set the config\n    this.config = Element.getConfig(container);\n    // set the img src from container attributes\n    this.src = this.container.attributes.src.nodeValue;\n    // initialize the panorama and camera\n    this.pano = new PANOLENS.ImagePanorama(this.src);\n    this.viewer = new PANOLENS.Viewer(this.config);\n  }\n\n  _createClass(Element, [{\n    key: 'init',\n    value: function init() {\n      this.viewer.add(this.pano);\n      this.appendCaption();\n    }\n  }, {\n    key: 'appendCaption',\n    value: function appendCaption() {\n      this.caption = this.container.attributes.caption.nodeValue;\n      if (this.caption && this.caption !== '') {\n        var captionDiv = document.createElement('em');\n        captionDiv.appendChild(document.createTextNode(this.caption));\n        this.container.appendChild(captionDiv);\n      }\n    }\n  }]);\n\n  return Element;\n}();\n\nvar Page = function () {\n  function Page(containers) {\n    _classCallCheck(this, Page);\n\n    if (!containers || typeof containers === 'undefined') {\n      throw new Error('No jQuery pattern for panorama container provided.');\n    }\n    this.panos = [];\n    this.elements = document.getElementsByTagName(\"pano\");\n    for (var i = 0; i < this.elements.length; i++) {\n      this.panos.push(new Element(this.elements[i]));\n    }\n  }\n\n  _createClass(Page, [{\n    key: 'init',\n    value: function init() {\n      for (var i = 0; i < this.panos.length; i++) {\n        this.panos[i].init();\n      }\n    }\n  }]);\n\n  return Page;\n}();\n\nvar Pano = {\n  Element: Element,\n  Page: Page\n};\n\nexports.Element = Element;\nexports.Page = Page;\nexports.default = Pano;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUtNLE87Ozs4QkFDYyxTLEVBQVc7QUFDM0IsVUFBSSxDQUFDLFNBQUQsSUFBYyxPQUFPLFNBQVAsS0FBcUIsV0FBdkMsRUFBb0Q7QUFDbEQsY0FBTSxJQUFJLEtBQUosQ0FBVSw2RUFBVixDQUFOO0FBQ0Q7QUFDRCxhQUFPO0FBQ0wsNEJBREs7QUFFTCw0QkFBb0IsSUFGZjtBQUdMLDBCQUFrQixJQUhiO0FBSUwsb0JBQVksSUFKUDtBQUtMLHdCQUFnQixDQUFDLFlBQUQsRUFBZSxJQUFmLENBTFg7QUFNTCwwQkFBa0I7QUFOYixPQUFQO0FBUUQ7OztBQUNELG1CQUFhLFNBQWIsRUFBd0I7QUFBQTs7QUFDdEIsUUFBSSxDQUFDLFNBQUQsSUFBYyxRQUFPLFNBQVAseUNBQU8sU0FBUCxPQUFxQixTQUF2QyxFQUFrRDtBQUNoRCxZQUFNLElBQUksS0FBSixDQUFVLG9EQUFWLENBQU47QUFDRDtBQUNELFNBQUssU0FBTCxHQUFpQixTQUFqQjs7QUFFQSxRQUFNLFFBQVEsT0FBTyxLQUFLLFNBQUwsQ0FBZSxVQUFmLENBQTBCLEtBQTFCLENBQWdDLFNBQXZDLElBQW9ELEdBQWxFO0FBQ0EsUUFBTSxTQUFTLE9BQU8sS0FBSyxTQUFMLENBQWUsVUFBZixDQUEwQixNQUExQixDQUFpQyxTQUF4QyxJQUFxRCxHQUFwRTtBQUNBLFFBQU0sU0FBUyxTQUFTLEtBQXhCO0FBQ0EsUUFBTSxlQUFlLFNBQVMsS0FBSyxTQUFMLENBQWUsYUFBZixDQUE2QixXQUEzRDs7QUFFQSxTQUFLLFNBQUwsQ0FBZSxLQUFmLENBQXFCLFdBQXJCLENBQWlDLFFBQWpDLEVBQThDLFlBQTlDOztBQUVBLFNBQUssTUFBTCxHQUFjLFFBQVEsU0FBUixDQUFrQixTQUFsQixDQUFkOztBQUVBLFNBQUssR0FBTCxHQUFXLEtBQUssU0FBTCxDQUFlLFVBQWYsQ0FBMEIsR0FBMUIsQ0FBOEIsU0FBekM7O0FBRUEsU0FBSyxJQUFMLEdBQVksSUFBSSxTQUFTLGFBQWIsQ0FBMkIsS0FBSyxHQUFoQyxDQUFaO0FBQ0EsU0FBSyxNQUFMLEdBQWMsSUFBSSxTQUFTLE1BQWIsQ0FBb0IsS0FBSyxNQUF6QixDQUFkO0FBQ0Q7Ozs7MkJBQ087QUFDTixXQUFLLE1BQUwsQ0FBWSxHQUFaLENBQWdCLEtBQUssSUFBckI7QUFDQSxXQUFLLGFBQUw7QUFDRDs7O29DQUNnQjtBQUNmLFdBQUssT0FBTCxHQUFlLEtBQUssU0FBTCxDQUFlLFVBQWYsQ0FBMEIsT0FBMUIsQ0FBa0MsU0FBakQ7QUFDQSxVQUFJLEtBQUssT0FBTCxJQUFnQixLQUFLLE9BQUwsS0FBaUIsRUFBckMsRUFBeUM7QUFDdkMsWUFBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFuQjtBQUNBLG1CQUFXLFdBQVgsQ0FBdUIsU0FBUyxjQUFULENBQXdCLEtBQUssT0FBN0IsQ0FBdkI7QUFDQSxhQUFLLFNBQUwsQ0FBZSxXQUFmLENBQTJCLFVBQTNCO0FBQ0Q7QUFDRjs7Ozs7O0lBR0csSTtBQUNKLGdCQUFhLFVBQWIsRUFBeUI7QUFBQTs7QUFDdkIsUUFBSSxDQUFDLFVBQUQsSUFBZSxPQUFPLFVBQVAsS0FBc0IsV0FBekMsRUFBc0Q7QUFDcEQsWUFBTSxJQUFJLEtBQUosQ0FBVSxvREFBVixDQUFOO0FBQ0Q7QUFDRCxTQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsQ0FBaEI7QUFDQSxTQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxLQUFLLFFBQUwsQ0FBYyxNQUFqQyxFQUF5QyxHQUF6QyxFQUE4QztBQUM1QyxXQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQUksT0FBSixDQUFZLEtBQUssUUFBTCxDQUFjLENBQWQsQ0FBWixDQUFoQjtBQUNEO0FBQ0Y7Ozs7MkJBQ087QUFDTixXQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxLQUFLLEtBQUwsQ0FBVyxNQUE5QixFQUFzQyxHQUF0QyxFQUEyQztBQUN6QyxhQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWMsSUFBZDtBQUNEO0FBQ0Y7Ozs7OztBQUdILElBQU0sT0FBTztBQUNYLGtCQURXO0FBRVg7QUFGVyxDQUFiOztRQUtTLE8sR0FBQSxPO1FBQVMsSSxHQUFBLEk7a0JBQ0gsSSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFBBTk9MRU5TIGZyb20gJ3Bhbm9sZW5zLmpzJ1xuXG4vLyB3aXRoIGNzcy1sb2FkZXIgd2UgY2FuIGxvYWQgY3NzIGZpbGVzIGFzIHBhcnQgb2YgdGhlIGNvZGUgYW5kIGl0IHdpbGwgYnVuZGxlIGFsbCBvZiB0aGVtIGludG8gb25lIGNzcyBmaWxlIGZvciB1c1xuLy8gaW1wb3J0ICcuL25vcm1hbGl6ZS5jc3MnXG5cbmNsYXNzIEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0Q29uZmlnIChjb250YWluZXIpIHtcbiAgICBpZiAoIWNvbnRhaW5lciB8fCB0eXBlb2YgY29udGFpbmVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYW5vLkVsZW1lbnQuZ2V0Q29uZmlnIHJlcXVpcmVzIGEgY29udGFpbmVyIGFyZ3VtZW50IHRoYXQgaXMgYSBET00gZWxlbWVudC4nKVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgYXV0b0hpZGVDb250cm9sQmFyOiB0cnVlLFxuICAgICAgYXV0b0hpZGVJbmZvc3BvdDogdHJ1ZSxcbiAgICAgIGNvbnRyb2xCYXI6IHRydWUsXG4gICAgICBjb250cm9sQnV0dG9uczogWydmdWxsc2NyZWVuJywgJ3ZyJ10sXG4gICAgICBwYXNzaXZlUmVuZGVyaW5nOiBmYWxzZVxuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyKSB7XG4gICAgaWYgKCFjb250YWluZXIgfHwgdHlwZW9mIGNvbnRhaW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGpRdWVyeSBwYXR0ZXJuIGZvciBwYW5vcmFtYSBjb250YWluZXIgcHJvdmlkZWQuJylcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBhc3BlY3QgcmF0aW8gZm9yIHRoZSBwYW5vIGNvbnRhaW5lclxuICAgIGNvbnN0IHdpZHRoID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmF0dHJpYnV0ZXMud2lkdGgubm9kZVZhbHVlKSAqIDEuMFxuICAgIGNvbnN0IGhlaWdodCA9IE51bWJlcih0aGlzLmNvbnRhaW5lci5hdHRyaWJ1dGVzLmhlaWdodC5ub2RlVmFsdWUpICogMS4wXG4gICAgY29uc3QgYXNwZWN0ID0gaGVpZ2h0IC8gd2lkdGhcbiAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSBhc3BlY3QgKiB0aGlzLmNvbnRhaW5lci5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgLy8gc2V0IHRoZSBoZWlnaHQgb2YgY29udGFpbmVyIHRvIGNhbGN1bGF0ZWQgdGFyZ2V0IGhlaWdodFxuICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCBgJHt0YXJnZXRIZWlnaHR9cHhgKVxuICAgIC8vIHNldCB0aGUgY29uZmlnXG4gICAgdGhpcy5jb25maWcgPSBFbGVtZW50LmdldENvbmZpZyhjb250YWluZXIpXG4gICAgLy8gc2V0IHRoZSBpbWcgc3JjIGZyb20gY29udGFpbmVyIGF0dHJpYnV0ZXNcbiAgICB0aGlzLnNyYyA9IHRoaXMuY29udGFpbmVyLmF0dHJpYnV0ZXMuc3JjLm5vZGVWYWx1ZVxuICAgIC8vIGluaXRpYWxpemUgdGhlIHBhbm9yYW1hIGFuZCBjYW1lcmFcbiAgICB0aGlzLnBhbm8gPSBuZXcgUEFOT0xFTlMuSW1hZ2VQYW5vcmFtYSh0aGlzLnNyYylcbiAgICB0aGlzLnZpZXdlciA9IG5ldyBQQU5PTEVOUy5WaWV3ZXIodGhpcy5jb25maWcpXG4gIH1cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy52aWV3ZXIuYWRkKHRoaXMucGFubylcbiAgICB0aGlzLmFwcGVuZENhcHRpb24oKVxuICB9XG4gIGFwcGVuZENhcHRpb24gKCkge1xuICAgIHRoaXMuY2FwdGlvbiA9IHRoaXMuY29udGFpbmVyLmF0dHJpYnV0ZXMuY2FwdGlvbi5ub2RlVmFsdWVcbiAgICBpZiAodGhpcy5jYXB0aW9uICYmIHRoaXMuY2FwdGlvbiAhPT0gJycpIHtcbiAgICAgIGNvbnN0IGNhcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbScpXG4gICAgICBjYXB0aW9uRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuY2FwdGlvbikpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXB0aW9uRGl2KVxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IgKGNvbnRhaW5lcnMpIHtcbiAgICBpZiAoIWNvbnRhaW5lcnMgfHwgdHlwZW9mIGNvbnRhaW5lcnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGpRdWVyeSBwYXR0ZXJuIGZvciBwYW5vcmFtYSBjb250YWluZXIgcHJvdmlkZWQuJylcbiAgICB9XG4gICAgdGhpcy5wYW5vcyA9IFtdXG4gICAgdGhpcy5lbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFub1wiKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnBhbm9zLnB1c2gobmV3IEVsZW1lbnQodGhpcy5lbGVtZW50c1tpXSkpXG4gICAgfVxuICB9XG4gIGluaXQgKCkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBhbm9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnBhbm9zW2ldLmluaXQoKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBQYW5vID0ge1xuICBFbGVtZW50LFxuICBQYWdlXG59XG5cbmV4cG9ydCB7IEVsZW1lbnQsIFBhZ2UgfVxuZXhwb3J0IGRlZmF1bHQgUGFub1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ])
});
;