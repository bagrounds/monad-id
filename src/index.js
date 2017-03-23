/**
 *
 * @module monad-id
 */
;(function () {
  'use strict'

  /* exports */
  module.exports = Id

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

  Id.prototype.map = function map (f) {
    return Id(f(this.value))
  }

  Id.prototype.join = function join () {
    return this.value
  }
})()

