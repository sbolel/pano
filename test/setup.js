import chai from 'chai'
global.chai = chai
const expect = global.expect = chai.expect
const should = global.should = chai.should()

// const Promise = require('es6-promise').Promise
// global.Promise = Promise

// const chaiAsPromised = require('chai-as-promised')
// chai.use(chaiAsPromised)

import { JSDOM } from 'jsdom'
const dom = new JSDOM('<html><body></body></html>')

global.window = dom.window
global.document = dom.window.document
// global.navigator = dom.window.navigator
