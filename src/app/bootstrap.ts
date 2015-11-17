/// <reference path="../typings/_custom.d.ts" />

import {bootstrap} from 'angular2/angular2';

import {FORM_PROVIDERS} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

// import {APP_SERVICES_BINDINGS} from './services/services';
import {App} from './components/app/app';

const UNIVERSAL_BINDINGS = [
  HTTP_PROVIDERS,
  FORM_PROVIDERS,
  ROUTER_PROVIDERS,

  // APP_SERVICES_BINDINGS
];

const APP_BINDINGS = [
  UNIVERSAL_BINDINGS
];

bootstrap(
  App,
  APP_BINDINGS
);
