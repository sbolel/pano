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
  import pano from 'pano'
  pano.login(auth)
    .then(user => console.log('Successful login', user))
    .catch(error => console.error('Error logging in', error))

    ```

  #### ES5
    ```javascript
  var pano = require('pano')
  pano.login(auth)
    .then(function (user) {
      console.log('Successful login', user)
    })
    .catch(function (error) {
      console.error('Error logging in', error)
    })
    ```

### Browser (CDN)
  1. Add script tag to index.html:

      ```html
      ```

  2. Start using the library:

    ```javascript
    const username = 'scott'
    const password = 'testpassword'
    // Login in order to make Authenticated requests
    new Pano.Page('pano')
    ```

    ```javascript
    const username = 'scott'
    // Get a specific user
    Pano.user(username)
      .get()
      .then(user => console.log('user loaded:', user))
      .catch(error => console.error('Error getting user', error))
    ```


Include [jQuery][jquery], [pano.js][pano] in your HTML:
**NOTE**: Dependencies will soon be loaded by webpack and this will no longer be necessary

```html
<head>
  <script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>
  <script type="text/javascript" src="node_modules/pano/dist/pano.min.js"></script>
  <!-- CDN available -->
  <script src="http://cdn.sinanbolel.com/js/pano/latest/pano.js"></script>

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
  const panoPage = new Pano.Page('pano');
  panoPage.init();
});
</script>
```

## Future

* Remove jQuery dependency


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
