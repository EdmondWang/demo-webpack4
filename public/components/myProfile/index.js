'use strict';

import MyLogo from './logo-edmondwang.svg';

function component() {
    var element = document.createElement('div');
    element.classList.add('my');

    var myLogoImg = new Image();
    myLogoImg.src = MyLogo;
    element.appendChild(myLogoImg);

    var btn = document.createElement('button');
    var text = document.createTextNode('Update');
    btn.onclick = function (evt) {
        console.log(evt);
    };
    btn.appendChild(text);

    element.appendChild(btn);

    return element;
}

export default component;