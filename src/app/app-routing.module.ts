import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'lazy',
		loadChildren: () => import('./modules/lazy/lazy.module').then(m => m.LazyModule),
	},
	{
		path: 'lazy_2',
		loadChildren: () => import('./modules/lazy-2/lazy-2.module').then(m => m.Lazy2Module),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
