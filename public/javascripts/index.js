'use strict';

// JS bucket
import $ from 'jquery';

// CSS bucket
import '../stylesheets/style.scss';

// Component bucket
import MyProfile from '../components/myProfile/index';

console.log('Hello webpack');

$(document).ready(function () {
    document.body.appendChild(MyProfile());
});