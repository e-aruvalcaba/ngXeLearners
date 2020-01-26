import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './componentes/menu/menu.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CursosresumenComponent } from './componentes/cursosresumen/cursosresumen.component';
import es from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AgWordCloudModule } from 'angular4-word-cloud';
import { WordcloudComponent } from './componentes/wordcloud/wordcloud.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



registerLocaleData(es);
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    CursosresumenComponent,
    UsuariosComponent,
    WordcloudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AgWordCloudModule.forRoot(),
    NgbModule.forRoot(),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-MX' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
