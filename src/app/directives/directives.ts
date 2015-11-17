/// <reference path="../../typings/_custom.d.ts" />

import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

export var SERVICES_DIRECTIVES: Array<any> = [];

export var ANGULAR_DIRECTIVES: Array<any> = [
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  ROUTER_DIRECTIVES,
];

export var APP_DIRECTIVES: Array<any> = [
  ANGULAR_DIRECTIVES,
  SERVICES_DIRECTIVES
];

