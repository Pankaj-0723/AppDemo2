import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamplecomponentComponent } from './samplecomponent/samplecomponent.component';
import { SamplemoduleModule } from './samplemodule/samplemodule.module';

@NgModule({
  declarations: [
    AppComponent,
    SamplecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SamplemoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
