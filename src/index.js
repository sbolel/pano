// import PANOLENS from 'panolens.js'

// with css-loader we can load css files as part of the code and it will bundle all of them into one css file for us
// import './normalize.css'

class Element {
  static getConfig (container) {
    if (!container || typeof container === 'undefined') {
      throw new Error('Pano.Element.getConfig requires a container argument that is a DOM element.')
    }
    return {
      container,
      autoHideControlBar: true,
      autoHideInfospot: true,
      controlBar: true,
      controlButtons: ['fullscreen', 'vr'],
      passiveRendering: false
    }
  }
  constructor (container) {
    if (!container || typeof container === undefined) {
      throw new Error('No jQuery pattern for panorama container provided.')
    }
    this.container = container;
    // calculate the aspect ratio for the pano container
    const width = Number(this.container.attributes.width.nodeValue) * 1.0
    const height = Number(this.container.attributes.height.nodeValue) * 1.0
    const aspect = height / width
    const targetHeight = aspect * this.container.parentElement.offsetWidth
    // set the height of container to calculated target height
    this.container.style.setProperty('height', `${targetHeight}px`)
    // set the config
    this.config = Element.getConfig(container)
    // set the img src from container attributes
    this.src = this.container.attributes.src.nodeValue
    // initialize the panorama and camera
    this.pano = new PANOLENS.ImagePanorama(this.src)
    this.viewer = new PANOLENS.Viewer(this.config)
  }
  init () {
    this.viewer.add(this.pano)
    this.appendCaption()
  }
  appendCaption () {
    this.caption = this.container.attributes.caption.nodeValue
    if (this.caption && this.caption !== '') {
      const captionDiv = document.createElement('em')
      captionDiv.appendChild(document.createTextNode(this.caption))
      this.container.appendChild(captionDiv)
    }
  }
}

class Page {
  constructor (containers) {
    if (!containers || typeof containers === 'undefined') {
      throw new Error('No jQuery pattern for panorama container provided.')
    }
    this.panos = []
    this.elements = document.getElementsByTagName("pano")
    for(let i = 0; i < this.elements.length; i++) {
      this.panos.push(new Element(this.elements[i]))
    }
  }
  init () {
    for(let i = 0; i < this.panos.length; i++) {
      this.panos[i].init()
    }
  }
}

const Pano = {
  Element,
  Page
}

export { Element, Page }
export default Pano
