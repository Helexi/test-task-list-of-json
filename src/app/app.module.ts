import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataListComponent } from './datalist/datalist.component';
import { IsNullPipe } from './pipes/is-null.pipe';
import { DataService } from './service/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    IsNullPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
