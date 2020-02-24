import { Component, OnInit, Input, Output,EventEmitter, OnChanges } from '@angular/core';
import { CompanyTicker } from '../../models/company-ticker.model';
import { Observable } from 'rxjs';
import { CompanyDetail } from '../../models/company-detail.model';

@Component({
  selector: 'app-ticker-list-component',
  templateUrl: './ticker-list.component.html',
  styleUrls: ['./ticker-list.component.css']
})
export class TickerListComponent implements OnInit {

  @Output() companySelected: EventEmitter<string> = new EventEmitter();
  @Input('tickers') tickers: CompanyTicker[];
  constructor() { }

  ngOnInit() {
  }

  onCompanySelected(value) {
    this.companySelected.emit(value);
  }

}
