import { NgModule } from '@angular/core';
import { CoreService } from './core.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreInterceptor } from './core.interceptor';

@NgModule({
	providers: [CoreService, { provide: HTTP_INTERCEPTORS, useClass: CoreInterceptor, multi: true }],
})
export class CoreModule {}
