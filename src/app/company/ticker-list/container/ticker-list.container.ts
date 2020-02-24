import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/app.state';
import { Store, select } from '@ngrx/store';
import { GetAllCompaniesAction, CompanySelectedAction } from '../../store/company.actions';
import { Observable } from 'rxjs';
import { CompanyTicker } from '../../models/company-ticker.model';
import { selectFeatureRegion, selectFeatureTickers, selectCompanyDetail } from '../../store/company.selectors';
import { map } from 'rxjs/operators';
import { CompanyDetail } from '../../models/company-detail.model';

@Component({
  selector: 'app-ticker-list-container',
  templateUrl: './ticker-list.container.html',
  styleUrls: ['./ticker-list.container.css']
})
export class TickerListContainer implements OnInit {

  private tickers$ : Observable<CompanyTicker[]>;
  constructor(private store: Store<IAppState>) {

  }

  ngOnInit() {
    this.store.dispatch(new GetAllCompaniesAction('ADR'));
    this.tickers$ = this.store.pipe(
      map((state) =>selectFeatureTickers(state)));
  }

  handleCompanySelected(value) {
    console.log('In container '+ value);
    this.store.dispatch(new CompanySelectedAction(value))
  }
}
