import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {DietcompComponent} from '../components/dietcomp/dietcomp.component';
import { IonicModule } from '@ionic/angular';

import { DietPage } from './diet.page';

const routes: Routes = [
  {
    path: '',
    component: DietPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DietPage, DietcompComponent]
})
export class DietPageModule {}
