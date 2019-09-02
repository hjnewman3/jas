import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WhoWeArePage } from './who-we-are.page';

const routes: Routes = [
  {
    path: '',
    component: WhoWeArePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WhoWeArePage]
})
export class WhoWeArePageModule {}
