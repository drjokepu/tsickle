goog.module('test_files.methods.methods');var module = module || {id: 'test_files/methods/methods.js'};/**
 * @unrestricted
 */
class HasMethods {
    /**
     * @return {void}
     */
    one() { }
    /**
     * @param {string} a
     * @return {number}
     */
    two(a) { return 1; }
    /**
     * @return {number}
     */
    get f() { return this._f + 1; }
    /**
     * @param {number} n
     * @return {void}
     */
    set f(n) { this._f = n - 1; }
    static _tsickle_typeAnnotationsHelper() {
        /** @type {number} */
        HasMethods.prototype._f;
    }
}