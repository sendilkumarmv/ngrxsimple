import { CompanyTicker } from './company/models/company-ticker.model';
import { CompanyDetail } from './company/models/company-detail.model';

export interface IAppState {
  exchangeRegion: string;
  tickers: CompanyTicker[];
  selectedTicker: CompanyTicker;
  companyDetail: CompanyDetail;
}
