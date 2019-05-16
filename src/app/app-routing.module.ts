import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {DietcompComponent} from './components/dietcomp/dietcomp.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calorie',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'calorie', loadChildren: './calorie/calorie.module#CaloriePageModule' },
  { path: 'workout', loadChildren: './workout/workout.module#WorkoutPageModule' },
  { path: 'fat', loadChildren: './fat/fat.module#FatPageModule' },
  { path: 'diet', loadChildren: './diet/diet.module#DietPageModule' },
  { path: 'addworkday', loadChildren: './addworkday/addworkday.module#AddworkdayPageModule' },
  { path: 'adddaywork', loadChildren: './adddaywork/adddaywork.module#AdddayworkPageModule' },
  { path: 'addnutrition', loadChildren: './addnutrition/addnutrition.module#AddnutritionPageModule' },
  // { path: 'dietcmp', component: DietcompComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
