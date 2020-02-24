import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyDetailContainer } from './company-detail/container/company-detail.container';
import { CompanyDetailComponent } from './company-detail/component/company-detail.component';
import { StoreModule } from '@ngrx/store';
import { CompanyReducer } from './store/company.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './store/company.effects';
import { TickerListComponent } from './ticker-list/component/ticker-list.component';
import { TickerListContainer } from './ticker-list/container/ticker-list.container';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';
import { CompanyService } from './company.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CompanyDetailContainer,
    CompanyDetailComponent,
    TickerListComponent,
    TickerListContainer,
    CompanyOverviewComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    CompanyRoutingModule,
    StoreModule.forFeature('companyFeature', CompanyReducer),
    EffectsModule.forFeature([CompanyEffects])
  ],
  providers: [
    CompanyService
  ]
})
export class CompanyModule { }
