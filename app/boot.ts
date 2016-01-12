import {provide}    from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent} from './app.component';
import {SheetFactory} from './sheetFactory';
import {SheetWeightAdjuster} from './sheetWeightAdjuster.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(SheetFactory, {useClass: SheetFactory}), SheetWeightAdjuster]);