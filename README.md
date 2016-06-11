# Pano.js

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][climate-image]][climate-url]
[![Code Coverage][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Code Style][code-style-image]][code-style-url]

[jquery]: https://github.com/jquery/jquery
[three]: https://github.com/mrdoob/three.js
[panolens]: https://github.com/sbolel/panolens.js
[pano]: https://github.com/sbolel/pano

_Easily add multiple [Panolens.js][panolens] 360-panoramic viewers to a page_

#### > View the [demo](http://sbolel.github.io/pano/)

* Implements `PanoElement` and `PanoPage`
* Requires [Panolens.js][panolens]
* Based on [Panolens.js](https://github.com/sbolel/panolens.js) by [pchen66](https://github.io/pchen66)

## Installation

    npm install --save pano

## Usage

### NPM

Include and use `pano`:

#### ES6
  ```javascript
  import Pano from 'pano'
  import { Page } from 'pano'
  // Pano.Page === Page
  const panoPage = new Page('pano')
  panoPage.init()
  ```

#### ES5
  ```javascript
  var Pano = require('pano')
  var panoPage = new Pano.Page('pano')
  panoPage.init()
  ```

### Browser (CDN)

Add [panolens.js][panolens] and [pano.js][pano] scripts in your HTML:

```html
<head>
  <script type="text/javascript" src="node_modules/panolens.js/panolens.min.js"></script>
  <script type="text/javascript" src="node_modules/pano/dist/pano.min.js"></script>
  <!-- CDN available -->
  <!-- <script src="http://cdn.sinanbolel.com/js/pano/pano.js"></script> -->
</head>
```

Add the required image `width`, `height`, `src`, and optional `caption` attributes to a `<pano>` element in your HTML:

```html
<pano width="1024" height="512" src="https://sbolel.github.io/pano/img/588ca1b0bf_o.jpg" caption="Equirectangular Panorama"/></pano>
```

Initialize all `<pano>` elements on the page:

```html
<script type="text/javascript">
  const panoPage = new Pano.Page('pano');
  panoPage.init();
</script>
```

## Special Thanks

* [Prescott Prue](http://github.com/prescottprue) - Webpack implementation, tests, coverage

[npm-image]: https://img.shields.io/npm/v/pano.svg?style=flat-square
[npm-url]: https://npmjs.org/package/pano
[npm-downloads-image]: https://img.shields.io/npm/dm/pano.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/sbolel/pano/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/sbolel/pano
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
