import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/browse/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { BannerComponent } from './core/Components/banner/banner.component';

const routes: Routes = [
  // {path:'',loadComponent:()=>import('./login/login.component').then(a=>a.LoginComponent)},
  {path:'',component:LoginComponent},
  // {path:'browse',loadComponent:()=>import('./browse/browse.component').then(a=>a.BrowseComponent)}
  {path:'browse',component:BrowseComponent},
  {path:'banner',component:BannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
