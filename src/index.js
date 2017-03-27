/**
 *
 * @module monad-id
 */
;(function () {
  'use strict'

  /* imports */
  var compose = require('fun-compose')
  var funMonad = require('fun-monad')

  /* exports */
  module.exports = funMonad({
    type: Id,
    of: idOf,
    map: idMap,
    join: idJoin
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

  function idOf (value) {
    return Id(value)
  }

  function idJoin (mma) {
    return mma.value
  }

  function idMap (f, ma) {
    return [idOf, f, idJoin].reduce(compose)(ma)
  }
})()

