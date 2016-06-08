# Pano.js

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

Include [jQuery][jquery], [pano.js][pano] in your HTML:

```html
<head>
  <script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>
  <script type="text/javascript" src="node_modules/pano/dist/pano.min.js"></script>
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
* ES6-ify [panolens.js][panolens]

