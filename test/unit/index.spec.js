import Pano, { Element, Page } from '../../src/index.js'

/* global describe, it, expect */
describe('pano Library', () => {
  describe('constructor', () => {
    it('creates pano object', () => {
      expect(Pano).to.exist
    })
  })

  describe('Element', () => {
    it('is exported', () => {
      expect(Element).to.exist
    })
    it('exports to default', () => {
      expect(Pano).to.respondTo('Element')
    })
  })
  describe('Page', () => {
    it('is exported', () => {
      expect(Page).to.exist
    })
    it('exports to default', () => {
      expect(Pano).to.respondTo('Page')
    })
  })
})
