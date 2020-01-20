import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

// *******************************************************************************
// Layouts

import { Layout1Component } from './layout/layout-1/layout-1.component';
import { LayoutWithoutSidenavComponent } from './layout/layout-without-sidenav/layout-without-sidenav.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';
import { LayoutWithoutNavbarComponent } from './layout/layout-without-navbar/layout-without-navbar.component';

// *******************************************************************************
// Pages

import { HomeComponent } from './home/home.component';
import { Page2Component } from './page-2/page-2.component';

// *******************************************************************************
// Routes

const routes: Routes = [

  { path: '', component: LayoutBlankComponent, pathMatch: 'full', children: [
    { path: '', component: HomeComponent },
  ]},

  { path: 'page-2', component: Layout1Component, children: [
    { path: '', component: Page2Component },
  ]},

  // 404 Not Found page
  { path: '**', component: NotFoundComponent }

];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
