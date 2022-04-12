import { Inject, Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class CoreService {
	constructor(@Inject(HTTP_INTERCEPTORS) public interceptors: any[]) {}
}
