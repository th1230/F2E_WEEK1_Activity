import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from '../page/home/home.component';
import { Section1Component } from '../components/section1/section1.component';
import { HeaderComponent } from '../components/modules/header/header.component';

const routes:Routes=[
  {
    path:"",redirectTo:"F2E_WEEK1",pathMatch:"full"
  },
  {
    path:"F2E_WEEK1",component:HomeComponent,
  },
  {
    path:"**",component:HomeComponent,
  },
]

@NgModule({
  declarations: [HeaderComponent,Section1Component],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
