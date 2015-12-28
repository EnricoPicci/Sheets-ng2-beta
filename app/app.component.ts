import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {SheetDashboardComponent} from './sheetDashboard.component';
import {SheetSummaryComponent} from './sheetSummary.component';
import {SheetDetailComponent} from './sheetDetail.component';

@Component({
    selector: 'my-app',
	providers: [],
    template: `
         <router-outlet></router-outlet>
    `,
	directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
    {path: '/Dashboard/', name: 'SheetDashboard', component: SheetDashboardComponent, useAsDefault: true},
    {path: '/Sheet/:id', name: 'SheetSummary', component: SheetSummaryComponent},
    {path: '/SheetDetail/:id', name: 'SheetDetail', component: SheetDetailComponent},
])
export class AppComponent { }