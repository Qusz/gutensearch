import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { DownloadPageComponent } from './components/pages/download-page/download-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'download', component: undefined, children: [
      { path: ':id', component: DownloadPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
