import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopOverComponent } from './pop-over/pop-over.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, PopOverComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
