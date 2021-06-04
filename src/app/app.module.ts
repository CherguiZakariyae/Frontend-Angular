import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PersonSignupComponent } from './auth/signup/person-signup/person-signup.component';
import { CompanySignupComponent } from './auth/signup/company-signup/company-signup.component';
import { ProgramsComponent } from './programs/programs.component';
import { SingleProgramComponent } from './programs/single-program/single-program.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { WorkspaceComponent } from './workspace/workspace.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { DataTablesModule } from 'angular-datatables';
import { ReportComponent } from './programs/report/report.component';
import { AddProjectComponent } from './company-profile/add-project/add-project.component';
import { ProjectDetailComponent } from './company-profile/project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    PersonSignupComponent,
    CompanySignupComponent,
    ProgramsComponent,
    SingleProgramComponent,
    FourOhFourComponent,
    WorkspaceComponent,
    HomeComponent,
    ProfileComponent,
    CompanyProfileComponent,
    ReportComponent,
    AddProjectComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
