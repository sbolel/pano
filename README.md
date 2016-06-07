# 360 Panoramic Viewer

360 viewer implementation using [Panolens.js][https://github.com/pchen66/panolens.js] – [Demo](http://sbolel.github.io/pano/)

## Installation

    npm install --save pano

## Usage

Include jQuery, Three.js, Panolens, and Pano in your HTML:

```html
<head>
  <script type="text/javascript" src="lib/jquery/dist/jquery.min.js"></script>
  <script type="text/javascript" src="lib/three-js/three.js"></script>
  <script type="text/javascript" src="lib/panolens.js/build/panolens.min.js"></script>
  <script type="text/javascript" src="lib/pano/pano.js"></script>
</head>
```

Add the URL of the image to an element in your HTML, for example:

```html
<pano data-src="https://images.contentful.com/e4m0suk6oqie/1fk11I8VuGyA8YuCoAy4Ko/f2945f467f107c86312f10c43802ebcc/Reality_Capture_IMG_03.jpg"/></pano>
```

Initialize all `<pano>` elements on the page:

```html
<script>
$(() => {
  const urlFn = (elem) => $(elem).attr('data-src');
  const page = new PanoPage('pano', urlFn);
  page.view();
});
</script>
```

## Implementation

### `class PanoElement`

```js
class PanoElement {
  static getConfig(container, configs) {
    if (!container || typeof(container) === 'undefined') {
      throw new Error('PanoElement.getConfig requires a container argument that is a DOM element.');
    }
    if (configs) {
      configs.container = container;
      return configs;
    }
    return {
      container: container,       // A DOM Element container
      controlBar: true,           // Vsibility of bottom control bar
      controlButtons: [],         // Buttons in control bar. Defaults: ['fullscreen', 'navigation', 'vr', 'video']
      autoHideControlBar: false,  // Auto hide control bar
      autoHideInfospot: true,     // Auto hide infospots
      horizontalView: false,      // Allow only horizontal camera control
      cameraFov: 60,              // Camera field of view in degree
      reverseDragging: false,     // Reverse orbit control direction
      enableReticle: false,       // Enable reticle for mouseless interaction
      dwellTime: 1500,            // Dwell time for reticle selection in millisecond
      autoReticleSelect: true,    // Auto select a clickable target after dwellTime
      passiveRendering: false,    // Render only when control triggered by user input
    };
  }
  constructor(container, src) {
    if (!container) {
      throw new Error('No jQuery pattern for panorama container provided.');
    }
    this.container = container;
    this.config = PanoElement.getConfig(this.container);
    this.elem = $(this.container);
    this.src = src;
    this.pano = new PANOLENS.ImagePanorama(this.src);
    this.viewer = new PANOLENS.Viewer(this.config);
  }
  view() {
    this.viewer.add(this.pano);
  }
}
```

### `class PanoPage`

```js
class PanoPage {
  constructor(containerPattern, getUrlFromContainerFn) {
    if (!containerPattern || typeof(containerPattern) === '') {
      throw new Error('No jQuery pattern for panorama container provided.');
    }
    if (!getUrlFromContainerFn || typeof(getUrlFromContainerFn) !== 'function') {
      throw new Error('No function to extract url from containers provided.');
    }
    const self = this;
    this.containerPattern = containerPattern;
    this.panos = [];
    this.divs = $(this.containerPattern);
    this.divs.each((index, elem) => {
      self.panos.push(new PanoElement(elem, getUrlFromContainerFn(elem)));
    });
  }
  view() {
    for (let i = 0; i < this.panos.length; i++) {
      this.panos[i].view();
    }
  }
}
```
