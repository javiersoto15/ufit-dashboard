import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UNutritionPage } from './unutrition.page';

const routes: Routes = [
  {
    path: '',
    component: UNutritionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UNutritionPageRoutingModule {}
