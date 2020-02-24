import { Component, OnInit, Input } from '@angular/core';
import { CompanyDetail } from '../../models/company-detail.model';
import { Observable } from 'rxjs';
import { CompanyTicker } from '../../models/company-ticker.model';

@Component({
  selector: 'app-company-detail-component',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  @Input() companyDetail : CompanyDetail;
  @Input() selectedTicker: CompanyTicker;
  constructor() { }

  ngOnInit() {
  }

}
