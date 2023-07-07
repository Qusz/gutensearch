import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
