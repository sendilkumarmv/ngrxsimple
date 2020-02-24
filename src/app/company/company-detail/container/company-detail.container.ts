import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { CompanyDetail } from '../../models/company-detail.model';
import { Observable } from 'rxjs';
import { selectCompanyDetail, selectedTicker } from '../../store/company.selectors';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient } from '@angular/common/http';
import { CompanyTicker } from '../../models/company-ticker.model';

@Component({
  selector: 'app-company-detail-container',
  templateUrl: './company-detail.container.html',
  styleUrls: ['./company-detail.container.css']
})
export class CompanyDetailContainer implements OnInit {

  private companyDetail$: Observable<CompanyDetail>;
  private selectedTicker$: Observable<CompanyTicker>;

  constructor(private store: Store<IAppState>,private http: HttpClient) {

  }

  ngOnInit() {
    this.companyDetail$ = this.store.pipe(map( (state) =>selectCompanyDetail(state)));
    this.selectedTicker$ = this.store.pipe(map( (state) =>selectedTicker(state)));
  }

}
