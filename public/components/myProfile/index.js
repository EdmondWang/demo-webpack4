'use strict';

import MyLogo from './logo-edmondwang.svg';

function component() {
    var element = document.createElement('div');
    element.classList.add('my');

    var myLogoImg = new Image();
    myLogoImg.src = MyLogo;
    element.appendChild(myLogoImg);

    return element;
}

export default component;