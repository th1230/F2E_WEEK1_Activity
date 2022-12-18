import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../page/home/home.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'F2E_WEEK1',
    pathMatch: 'full',
  },
  {
    path: 'F2E_WEEK1',
    component: HomeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
