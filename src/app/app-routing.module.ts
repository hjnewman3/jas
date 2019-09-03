import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'my-jas', loadChildren: './my-jas/my-jas.module#MyJasPageModule'},
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'naja', loadChildren: './naja/naja.module#NajaPageModule'},
  { path: 'info', loadChildren: './info/info.module#InfoPageModule'},
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule'},
  { path: 'donate', loadChildren: './donate/donate.module#DonatePageModule' },
  { path: 'fundraisers', loadChildren: './fundraisers/fundraisers.module#FundraisersPageModule' },
  { path: 'who-we-are', loadChildren: './who-we-are/who-we-are.module#WhoWeArePageModule' },
  { path: 'sponsors', loadChildren: './sponsors/sponsors.module#SponsorsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
