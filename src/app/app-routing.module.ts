import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Clients',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'unutrition/:id',
    loadChildren: () => import('./unutrition/unutrition.module').then( m => m.UNutritionPageModule)
  },
  {
    path: 'food-list/:id',
    loadChildren: () => import('./food-list/food-list.module').then( m => m.FoodListPageModule)
  },



 




];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
