'use strict';

import MyLogo from './logo-edmondwang.svg';
import './base.scss';

function component() {
    var element = document.createElement('div');
    element.classList.add('my');

    var myLogoImg = new Image();
    myLogoImg.src = MyLogo;
    element.appendChild(myLogoImg);

    var btn = document.createElement('button');
    var text = document.createTextNode('Update');
    btn.onclick = function (evt) {
        console.log('Button get clicked');
        console.log(evt);
    };
    btn.appendChild(text);
    element.appendChild(btn);

    var socialLinksDiv = document.createElement('div');
    socialLinksDiv.classList.add('social-links');

    var githubLink = document.createElement('a');
    githubLink.href = 'http://edmondwang.github.io';
    githubLink.target = '_blank';
    githubLink.appendChild(document.createTextNode('Github'));

    socialLinksDiv.appendChild(githubLink);

    element.appendChild(socialLinksDiv);

    return element;
}

export default component;