/// <reference path="../../../typings/_custom.d.ts" />

import {Component, View} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';

import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {APP_DIRECTIVES} from '../../directives/directives';

import {Dashboard} from '../dashboard/dashboard';

let styles = require('./app.css');
let template = require('./app.html');

@Component({
  selector: 'app',
  viewBindings: []
})
@View({
  directives: [APP_DIRECTIVES],
  styles: [styles],
  template: template
})
@RouteConfig([
  { path: '/dashboard', as: 'Dashboard', component: Dashboard },
])
export class App {
  name: string;
  constructor() {
    this.name = 'Torbit';
  }
}
