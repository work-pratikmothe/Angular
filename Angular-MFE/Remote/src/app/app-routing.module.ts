import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularTechComponent } from './angular-tech/angular-tech.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'angular-tech', component: AngularTechComponent },
  { path: 'react', component: PageNotFoundComponent },
  { path: 'vue', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
