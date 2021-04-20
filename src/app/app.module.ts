import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { DemoComponent } from './pages/demo/demo.component';
import { AdministerComponent } from './pages/administer/administer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    DemoComponent,
    AdministerComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    NgxMaskModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
