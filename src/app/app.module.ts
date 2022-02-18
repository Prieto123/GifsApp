import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './shared/gifs/gifs.module';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';
import { BusquedaComponent } from './gifs/busqueda/busqueda.component';
import { ResultadosComponent } from './gifs/resultados/resultados.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GifsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
