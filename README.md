# Pano.js

[![Build Status][build-image]][build-url]
[![License][license-image]][license-url]
[![NPM version][npm-image]][npm-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Style][code-style-image]][code-style-url]
[![NPM downloads][npm-downloads-image]][npm-url]

_Add multiple [Panolens.js](https://github.com/sbolel/panolens.js) 360-panoramic viewers to a page with ease._

* Requires [Panolens.js](https://github.com/sbolel/panolens.js), which is based on [Panolens.js](https://github.com/sbolel/panolens.js) by [pchen66](https://github.com/pchen66)
* Implements `PanoElement` and `PanoPage`

## Installation

You can either install via npm and include the scripts in your build process, or use a CDN.

* **Using npm packages**, first install dependencies

      npm install --save panolens.js pano

  Then, include the scripts in your HTML: 

    ```html
    <script type="text/javascript" src="node_modules/panolens.js/panolens.min.js"></script>
    <script type="text/javascript" src="node_modules/pano/dist/pano.min.js"></script>
    ```

* **Using the CDN**, include scripts via CDN by adding them to your `index.html`:

  ```html
  <script type="text/javascript" src="//sinanbolel.firebaseapp.com/cdn/panolens-1.0.1-beta.min.js"></script>
  <script type="text/javascript" src="//sinanbolel.firebaseapp.com/cdn/pano-2.0.0.min.js"></script>
  ```

## Usage

1. Instantiate `Pano.Page` object

    ```js
    /** ES6 */
    import { Page } from 'pano'
    const panoPage = new Page('pano')
    panoPage.init()

    /** ES5 */
    var Pano = require('pano')
    var panoPage = new Pano.Page('pano')
    panoPage.init()
    ```

2. Add `<pano>` elemement HTML

  * Include the required `width`, `height`, `src`, `caption` (optional) attributes for the `<pano>` element(s) in your view:

    ```html
    <pano width="1024" height="512" src="https://sbolel.github.io/pano/img/588ca1b0bf_o.jpg" caption="Equirectangular Panorama"/></pano>
    ```

3. Initialize all `<pano>` elements on the page

    ```js
    var panoPage = new Pano.Page('pano')
    panoPage.init()
    ```

## Credits

* [prescottprue](http://github.com/prescottprue) - Webpack implementation, tests, coverage
* [pchen66](http://github.com/pchen66) - Original Panolens.js implementation

<!-- links -->

[npm-image]: https://img.shields.io/npm/v/pano.svg?style=flat-square
[npm-url]: https://npmjs.org/package/pano
[npm-downloads-image]: https://img.shields.io/npm/dm/pano.svg?style=flat-square
[build-image]: https://circleci.com/gh/sbolel/pano.svg?style=shield
[build-url]: https://circleci.com/gh/sbolel/pano
[daviddm-image]: https://img.shields.io/david/sbolel/pano.svg?style=flat-square
[daviddm-url]: https://david-dm.org/sbolel/pano
[climate-image]: https://img.shields.io/codeclimate/github/sbolel/pano.svg?style=flat-square
[climate-url]: https://img.shields.io/codeclimate/github/sbolel/pano.svg?style=flat-square
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/sbolel/pano.svg?style=flat-square
[coverage-url]: https://img.shields.io/codeclimate/coverage/github/sbolel/pano.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/pano.svg?style=flat-square
[license-url]: https://github.com/sbolel/pano/blob/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/
