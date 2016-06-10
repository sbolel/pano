(function () {
  const fs = require('fs-extra')
  const path = require('path')
  const config = require('../config.json')
  if (config.copy) {
    config.copy.forEach(asset => {
      fs.copySync(path.resolve(__dirname, '..', asset), 'dist/')
    })
  }
})()
