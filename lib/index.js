"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");


var f1 = function () {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject('f1')
      }, 1000);
  })
}
var f2 = function () {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(2);
        
          reject('f2')
      }, 2000);
  })
}
var f3 = function () {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(3);
          reject('f3')
      }, 3000);
  })
}
Promise.all([f1(), f2(), f3()]).then((res) => console.log(res)).catch(err => {
  console.log(err);
})