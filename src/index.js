console.log(1)
import {getName} from './a.js'
function getComponent() {

    return import(/* webpackChunkName: "abc" */ './a.js').then(_ => {
        console.log(_)
        var element = document.createElement('div');

        element.innerHTML = 'Hello'

        return element;

    }).catch(error => 'An error occurred while loading the component');
}

const body = document.body
body.style.height = '100vh'

body.addEventListener('click', () => {
    getComponent().then(component => {
        document.body.appendChild(component);
    })
})

if(module.hot) {
    module.hot.accept('./a.js', function() {
    // 使用更新过的 library 模块执行某些操作...
        getName()
    })
}