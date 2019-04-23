import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./module/material.module";
import {Router, RouterModule} from "@angular/router";
import {Error401Component} from "./error/error.401.component";
import {Error500Component} from "./error/error.500.component";
import {Error404Component} from "./error/error.404.component";
import {AuthGuard} from "./shared/guard";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MusicService} from "./service/MusicService";
export const createTranslateLoader = (http: HttpClient) => {
  /* for development
  return new TranslateHttpLoader(
      http,
      '/start-javascript/sb-admin-material/master/dist/assets/i18n/',
      '.json'
  );*/
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};


@NgModule({
  declarations: [
    AppComponent,
    Error401Component,
    Error500Component,
    Error404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([

      // { path: '', loadChildren: 'app/layout/layout.module#LayoutModule' },
      // { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
      // { path: 'sample', loadChildren: 'app/sample/sample.module#SampleModule' },
      {path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard]},
      { path: 'login', loadChildren: './login/login.module#LoginModule'},
      { path: '401', component: Error401Component },
      { path: '500', component: Error500Component },
      // { path: '**', component: Error404Component }
    ]),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }})
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
