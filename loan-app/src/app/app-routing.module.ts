import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoanAppComponent } from './loan-app/loan-app.component';

const routes: Routes = [
  { path: '', component: LoanAppComponent },
  { path: 'loan-app', component: LoanAppComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
