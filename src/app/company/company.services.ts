import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyTicker } from './models/company-ticker.model';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { CompanyDetail } from './models/company-detail.model';

@Injectable()
export class CompanyService {
  constructor(private http: HttpClient) {

  }

  public getTickers() {
      return this.http.get('http://localhost:61991/api/company/gettickers')
      .pipe(
        map(this.extractData),
        catchError((e) => e)
      );
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  public getCompanyDetail(ticker: string) {
    return this.http.get('http://localhost:61991/api/company/getdetail/'+ticker)
    .pipe(
      map(this.extractData),
      catchError((e) => e)
    );
  }
}
