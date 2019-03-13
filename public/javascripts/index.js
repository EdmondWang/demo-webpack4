'use strict';

import '../stylesheets/style.css';
import MyLogo from '../images/logo-edmondwang.svg';

console.log('Hello webpack');

function component() {
    var element = document.createElement('div');
    element.classList.add('my');

    var myLogoImg = new Image();
    myLogoImg.src = MyLogo;
    element.appendChild(myLogoImg);

    return element;
}

document.body.appendChild(component());