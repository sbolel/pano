const chai = global.chai = require('chai')
const expect = global.expect = chai.expect
const should = global.should = chai.should()

// const Promise = require('es6-promise').Promise
// global.Promise = Promise

// const chaiAsPromised = require('chai-as-promised')
// chai.use(chaiAsPromised)

const jsdom = require("jsdom")
const { JSDOM } = jsdom
const dom = new JSDOM(`<html><body></body></html>`)

const { document } = dom.window
global.document = dom.window.document
// global.navigator = dom.window.navigator
