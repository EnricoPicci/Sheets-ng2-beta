import {provide}    from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent} from './app.component';
import {SheetBackEnd} from './sheetBackEnd.service';
import {BackEndClientMock} from '../externalServicesClientMock/backEnd.clientMock.service';
import {SheetWeightAdjuster} from './sheetWeightAdjuster.service';
import {UserLogged} from './userLogged'; 

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(SheetBackEnd, {useClass: BackEndClientMock}), 
                        SheetWeightAdjuster, UserLogged]);