import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Pro1Component } from './pro1/pro1.component';
import { HomiComponent } from './homi/homi.component';
// import { ProjectdetailComponent } from './projectdetail/projectdetail.component';

const routes: Routes = [
  { path: '' , component: HomiComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'pro1' , component: Pro1Component},
  // { path: 'project' , component: ProjectdetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
