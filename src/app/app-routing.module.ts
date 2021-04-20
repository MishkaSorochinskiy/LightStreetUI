import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministerComponent } from './pages/administer/administer.component';
import { DemoComponent } from './pages/demo/demo.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'map', component:MapComponent},
  {path:'administer', component:AdministerComponent},
  {path:'demo', component:DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
