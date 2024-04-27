import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ExplainerComponent } from './explainer/explainer.component';
import { ExamComponent } from './exam/exam.component';
import { UserMessageComponent } from './explainer/user-message/user-message.component';
import {ResponseComponent} from "./explainer/response/response.component";
import {ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./services/user.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ExplainerComponent,
    ExamComponent,
    UserMessageComponent,
    ResponseComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
