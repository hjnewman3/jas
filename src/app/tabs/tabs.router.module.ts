import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'my-jas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../my-jas/my-jas.module').then(m => m.MyJasPageModule)
          }
        ]
      },
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../events/events.module').then(m => m.EventsPageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'naja',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../naja/naja.module').then(m => m.NajaPageModule)
          }
        ]
      },
      {
        path: 'info',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../info/info.module').then(m => m.InfoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
