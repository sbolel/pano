import $ from 'jQuery' // we can load this through webpack across all files as a global
// import PANOLENS from 'panolens.js'
// import './normalize.css' // with css-loader we can load css files as part of the code and it will bundle all of them into one css file for us
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
    // container jquery element
    this.container = $(container)
    // calculate and set the height of container from image size
    const width = Number(this.container.attr('width')) * 1.0
    const height = Number(this.container.attr('height')) * 1.0
    const aspect = height / width
    const targetHeight = aspect * this.container.parent().width()
    this.container.css('height', `${targetHeight}px`)
    // set the config
    this.config = Element.getConfig(container)
    // get caption
    this.caption = this.container.attr('caption')
    // set the img src from container attributes
    this.src = this.container.attr('src')
    // initialize the panorama and camera
    this.pano = new PANOLENS.ImagePanorama(this.src)
    this.viewer = new PANOLENS.Viewer(this.config)
  }
  init () {
    this.viewer.add(this.pano)
    if (this.caption) this.container.append(`<em>${this.caption}</em>`) // add the caption from element attributes
  }
}

class Page {
  constructor(containers) {
    if (!containers || typeof containers === 'undefined') {
      throw new Error('No jQuery pattern for panorama container provided.')
    }
    // const self = this
    this.panos = []
    $(containers).each((index, elem) => {
      // Fat arror passes context, and self was a const
      // self.panos.push(new Element(elem))
      this.panos.push(new Element(elem))
    })
  }
  init () {
    this.panos.forEach((panoInstance) => panoInstance.init())
  }
}

const Pano = {
  Element,
  Page,
}
export { Element, Page }
export default Pano
