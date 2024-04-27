import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ExplainerComponent} from "./explainer/explainer.component";

const routes: Routes = [
  {path:'',redirectTo:'/landing-page',pathMatch:"full"},
  {path:'landing-page',component:LandingPageComponent},
  {path:'explain',component:ExplainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
