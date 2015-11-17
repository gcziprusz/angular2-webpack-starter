/// <reference path="../../typings/_custom.d.ts" />

import {bind} from 'angular2/angular2';
import {EVENT_SERVICE_BINDINGS} from './event-service';


export * from './event-service';

export var APP_SERVICES_BINDINGS: Array<any> = [
  EVENT_SERVICE_BINDINGS
];
