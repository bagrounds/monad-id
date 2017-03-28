/**
 *
 * @module monad-id
 */
;(function () {
  'use strict'

  /* imports */
  var funMonad = require('fun-monad')

  /* exports */
  module.exports = funMonad({
    type: Id,
    of: Id,
    map: map,
    join: join
  })

  /**
   *
   * @function module:monad-id.Id
   *
   * @param {*} value - anything
   *
   * @return {Id} a new instance of Id containing value
   */
  function Id (value) {
    if (!this) {
      return new Id(value)
    }

    this.value = value
  }

  function join (mma) {
    return mma.value
  }

  function map (f, ma) {
    return Id(f(ma.value))
  }
})()

