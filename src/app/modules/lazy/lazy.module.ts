import { Inject, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LazyRouting } from './lazy.routing';
import { LazyComponent } from './lazy.component';
import { LazyInterceptor } from './lazy.interceptor';
import { CoreService } from '../core/core.service';

@NgModule({
	imports: [LazyRouting],
	declarations: [LazyComponent],
	providers: [{ provide: HTTP_INTERCEPTORS, useClass: LazyInterceptor, multi: true }],
})
export class LazyModule {
	constructor(@Inject(HTTP_INTERCEPTORS) interceptors: any[], coreService: CoreService) {
		console.log('LazyModule', interceptors);
		console.log('coreService interceptors', coreService.interceptors);
	}
}
