/// <reference path="../../typings/_custom.d.ts" />

import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import * as Rx from '@reactivex/rxjs';


@Injectable()
export class EventService {
    constructor(public http: Http) {

    }
}

export const EVENT_SERVICE_BINDINGS = [
    EventService
];
