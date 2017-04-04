/**
 *
 * @module monad-id
 */
;(function () {
  'use strict'

  /* imports */
  var funMonad = require('fun-monad')
  var id = require('fun-id')

  /* exports */
  module.exports = funMonad({
    type: id,
    of: id,
    map: map,
    join: id
  })

  function map (f, ma) {
    return f(ma)
  }
})()

