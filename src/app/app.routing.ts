import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CategoryComponent } from './category/category.component';
import { OneAdComponent} from './one-ad/one-ad.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },

  {
    path: 'category/:category',
    component: CategoryComponent
  },

  {
    path: 'category/:category/:id',
    component: OneAdComponent
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
