import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { HomePageComponent } from './home-page';
import { LoginPageComponent } from './login-page';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first-component',
    component: FirstComponent,
    children: [
      {
        path: 'child-a',
        component: ChildAComponent
      },
      {
        path: 'child-b',
        component: ChildBComponent
      },
    ],
  },
  { path: 'second-component', component: SecondComponent },
  { path: '', component: HomePageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: '**', redirectTo: '' }
  // { path: '', redirectTo: '/first-component', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
