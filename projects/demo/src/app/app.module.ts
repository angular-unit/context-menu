import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContextMenuModule } from 'projects/context-menu/src/public-api';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContextMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
