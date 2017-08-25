(function () {

  /**
   * @thanks to:
   * https://github.com/developit/preact-in-es3/blob/master/index.js
   */

  var preact = require('preact');

  // To use Classful Components in ES3/5, use your favorite inheritance technique.
  // If you don't intend to use the Component class, you can skip this.
  // Here's an example:
  function createClass(obj) {
    // sub-class Component:
    function Class(){ preact.Component.call(this); }
    var prototype = Class.prototype = new preact.Component;
    // copy our skeleton into the prototype:
    for (var i in obj) {
      if (i === 'getDefaultProps' && typeof obj.getDefaultProps === 'function') {
        Class.defaultProps = obj.getDefaultProps() || {};
      } else {
        prototype[i] = obj[i];
      }
    }
    // restore constructor:
    return prototype.constructor = Class;
  }


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = createClass;
  }

}());
