import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./views/homepage/homepage.component";
import {FormSubmittedComponent} from "./views/form-submitted/form-submitted.component";
import {FormInputComponent} from "./views/form-input/form-input.component";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'success',
    component: FormSubmittedComponent
  },
  {
    path: 'sign-up',
    component: FormInputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
