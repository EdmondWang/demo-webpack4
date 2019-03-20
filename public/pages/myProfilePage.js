'use strict';

import $ from 'jquery';

// Component bucket
import MyProfile from '../components/myProfile/index';

$(document).ready(function () {
    document.body.appendChild(MyProfile());
});