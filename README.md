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
* Requires [jQuery][jquery], [Three.js][three], [Panolens.js][panolens]
* Built from the original [Panolens.js](https://github.com/sbolel/panolens.js) by [pchen66](https://github.io/pchen66)

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

1. [pano.js][pano] in your HTML:

**NOTE**: jQuery is currently a dependency that is bundled into UMD (Browser) version of `pano.js`

```html
<head>
  <script type="text/javascript" src="node_modules/pano/dist/pano.min.js"></script>
  <!-- CDN available -->
  <!-- <script src="http://cdn.sinanbolel.com/js/pano/pano.js"></script> -->
</head>
```

Add the `src`, `height`, `width` of the image and an optional `caption` as attributes to an element in your HTML:

```html
<pano width="1024" height="397" src="https://images.contentful.com/e4m0suk6oqie/1fk11I8VuGyA8YuCoAy4Ko/f2945f467f107c86312f10c43802ebcc/Reality_Capture_IMG_03.jpg" caption="Equirectangular Panorama"/></pano>
```

Initialize all `<pano>` elements on the page:

```html
<script>
$(() => {
  const panoPage = new Pano.Page('pano')
  panoPage.init()
})
</script>
```

## Future

* Remove jQuery dependency

## Special Thanks

* [Prescott Prue](http://github.com/prescottprue) - Webpack implementation

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
