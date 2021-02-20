import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoWrapperComponent } from './components/info-wrapper/info-wrapper.component';
import { ModalWrapperComponent } from './components/info-wrapper/timeline/modal-wrapper/modal-wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'huzaifaanjum', pathMatch: 'full' },
  {
    path: 'huzaifaanjum', component: InfoWrapperComponent, children: [
      { path: 'experiences/:id', component: ModalWrapperComponent, outlet: 'modal' },
    ]
  },
  { path: '**', redirectTo: 'huzaifaanjum' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
