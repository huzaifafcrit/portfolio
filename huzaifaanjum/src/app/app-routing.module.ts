import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoWrapperComponent } from './components/info-wrapper/info-wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'huzaifaanjum', pathMatch: 'full' },
  { path: 'huzaifaanjum', component: InfoWrapperComponent },
  { path: '**', redirectTo: 'huzaifaanjum' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
