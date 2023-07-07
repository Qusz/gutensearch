import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout/default-layout.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar/navbar-item/navbar-item.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { DownloadPageComponent } from './components/pages/download-page/download-page.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SearchComponent } from './components/search/search.component';

import { appInitializerProvider  } from './app-initializer';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    LogoComponent,
    FooterComponent,
    NavbarComponent,
    NavbarItemComponent,
    MainPageComponent,
    DownloadPageComponent,
    SpinnerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    appInitializerProvider,  
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
