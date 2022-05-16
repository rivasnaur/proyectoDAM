'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  TOKEN: '"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"'
})
