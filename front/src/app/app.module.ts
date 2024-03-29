import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { ServiceService } from './admin/service/service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicelistComponent } from './admin/service/servicelist/servicelist.component';
import { ServicecreateComponent } from './admin/service/servicecreate/servicecreate.component';
import { ServicedetailsComponent } from './admin/service/servicedetails/servicedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicelistComponent,
    ServicecreateComponent,
    ServicedetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
