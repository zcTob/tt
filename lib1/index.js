"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

var p1 = new Promise(function (resovle, reject) {
  return resovle(1);
});