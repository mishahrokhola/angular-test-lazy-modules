import { Inject, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Lazy2Routing } from './lazy-2.routing';
import { Lazy2Component } from './lazy-2.component';
import { CoreService } from '../core/core.service';

@NgModule({
	imports: [Lazy2Routing],
	declarations: [Lazy2Component],
})
export class Lazy2Module {
	constructor(@Inject(HTTP_INTERCEPTORS) interceptors: any[], coreService: CoreService) {
		console.log('Lazy2Module', interceptors);
		console.log('coreService interceptors', coreService.interceptors);
	}
}
