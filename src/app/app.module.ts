import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { DemoComponent } from './pages/demo/demo.component';
import { AdministerComponent } from './pages/administer/administer.component';
import { HttpClientModule } from '@angular/common/http';
import { LampService } from './services/lamp.service';

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
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LampService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
