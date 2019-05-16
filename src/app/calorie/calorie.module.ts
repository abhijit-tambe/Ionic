import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {CalcompComponent} from '../components/calcomp/calcomp.component';
import { IonicModule } from '@ionic/angular';

import { CaloriePage } from './calorie.page';

const routes: Routes = [
  {
    path: '',
    component: CaloriePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CaloriePage, CalcompComponent]
})
export class CaloriePageModule {}
