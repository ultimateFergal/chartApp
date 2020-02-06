import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportsComponent } from './components/reports/reports.component';
import { MaterialModule } from './material/material.module';
import { IFrameReportComponent } from './components/iframe-report/iframe-report.component';
import { HttpClientModule } from '@angular/common/http';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ImageReportComponent } from './components/image-report/image-report.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    IFrameReportComponent,
    SafeUrlPipe,
    ImageReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [],
  providers: [
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
