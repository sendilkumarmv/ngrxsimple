import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CompanyActionType, GetAllCompaniesSuccessAction, CompanySelectedAction, CompanyDetailRetrivedAction } from './company.actions';
import { switchMap, map } from 'rxjs/operators/';
import { CompanyTicker } from '../models/company-ticker.model';
import { CompanyService } from '../company.services';
import { CompanyDetail } from '../models/company-detail.model';

@Injectable()
export class CompanyEffects {
  constructor(private actions: Actions,
    private companyService: CompanyService) {

  }

  @Effect() getAllCompanyEffect$ = this.actions.pipe(
    ofType(CompanyActionType.GetAllCompanies),
    switchMap(() => {
      return this.companyService.getTickers()
        .pipe(
          map((tickers) => {
            const ne = tickers as CompanyTicker[];
            return new GetAllCompaniesSuccessAction(ne)
          })
        )
    })
  );

  @Effect() companySelected$ = this.actions.pipe(
    ofType<CompanySelectedAction>(CompanyActionType.CompanySelected),
    switchMap((action) => {
      return this.companyService.getCompanyDetail(action.payLoad)
      .pipe(
        map((detail) => {
          const de = detail as CompanyDetail;
          return new CompanyDetailRetrivedAction(de);
        })
      )
    })
  );

}
