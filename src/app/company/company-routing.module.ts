import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';

const routes: Routes = [{
  path: '',
  component: CompanyOverviewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
