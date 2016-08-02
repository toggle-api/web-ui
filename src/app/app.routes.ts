import { provideRouter, RouterConfig, Route } from '@angular/router';
import { OverviewComponent } from './overview.component';
import { ToggleListComponent } from './toggle/list.component';
import { ToggleDetailComponent } from './toggle/detail.component';
import { ToggleEditComponent } from './toggle/edit.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: RouterConfig = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  {
    path: 'toggles', children: [
    { path: '', component: ToggleListComponent },
    { path: ':id', component: ToggleDetailComponent },
    { path: ':id/edit', component: ToggleEditComponent },
  ]
  },
  { path: '**', component: PageNotFoundComponent }
];

export const components: any[] = routes.
    filter(route => route.children !== undefined).
    map(route => route.children).
    concat(routes).
    filter((route: Route) => route.component !== undefined).
    map((route: Route) => route.component);

export const appRouterProviders = [
  provideRouter(routes)
];
