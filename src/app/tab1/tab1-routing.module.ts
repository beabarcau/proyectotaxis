import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'tab2',
    loadChildren: () => import('../tab2/tab2.page').then(m => m.Tab2Page)
  },
  {
    path: 'tab3',
    loadChildren: () => import('../tab3/tab3.page').then(m => m.Tab3Page)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
