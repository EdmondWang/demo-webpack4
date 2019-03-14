'use strict';

import $ from 'jquery';

import '../stylesheets/style.scss';
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

$(document).ready(function () {
    document.body.appendChild(component());
});