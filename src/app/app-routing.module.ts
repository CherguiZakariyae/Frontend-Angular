import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProgramsComponent } from './programs/programs.component';
import { SingleProgramComponent } from './programs/single-program/single-program.component';
import { PersonSignupComponent } from './auth/signup/person-signup/person-signup.component';
import { CompanySignupComponent } from './auth/signup/company-signup/company-signup.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { WorkspaceComponent } from './workspace/workspace.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { ReportComponent } from './programs/report/report.component';
import { AddProjectComponent } from './company-profile/add-project/add-project.component';
import { ProjectDetailComponent } from './company-profile/project-detail/project-detail.component';

const routes: Routes = [
  { path: 'companyprofile/projectdetail', component: ProjectDetailComponent /*, canActivate: [AuthGuard]*/},
  { path: 'companyprofile/addproject', component: AddProjectComponent /*, canActivate: [AuthGuard]*/},
  { path: 'programs/report', component: ReportComponent /*, canActivate: [AuthGuard]*/},
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signup/personsignup', component: PersonSignupComponent },
  { path: 'auth/signup/companysignup', component: CompanySignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'programs', component: ProgramsComponent/*, canActivate: [AuthGuard] */},
  { path: 'programs/view/:id', component: SingleProgramComponent, canActivate: [AuthGuard] },
  { path: 'workspace', component: WorkspaceComponent/*, canActivate: [AuthGuard] */},
  { path: 'profile', component: ProfileComponent },
  { path: 'companyprofile', component: CompanyProfileComponent },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
  { path: '', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
