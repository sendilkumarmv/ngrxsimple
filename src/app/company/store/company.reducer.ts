import { CompanyActionType, CompanyActions } from './company.actions';
import { IAppState } from 'src/app/app.state';
import { CompanyTicker } from '../models/company-ticker.model';
import { CompanyDetail } from '../models/company-detail.model';

const tickersEmpty: CompanyTicker[] = [ {
  adrListName: '',
  adrTickerName: ''
}];
const companyDetail: CompanyDetail = {
  high:'',
  low:'',
  weekHigh52:'',
  weekLow52:'',
  peRatio:'',
  prevClose:'',
  open:'',
  marketCap:'',
  summary:'',
  trend:'',
  yield:'',
  tickerName: '',
  listName:''
}

const initialState: IAppState = {
  tickers: tickersEmpty,
  selectedTicker: { adrListName:'', adrTickerName: ''},
  exchangeRegion: '',
  companyDetail: companyDetail
}

export function CompanyReducer(state: IAppState = initialState, action: CompanyActions) {
  switch(action.type) {
    case CompanyActionType.GetAllCompanies: {
      return {
        ...state,
        exchangeRegion: action.payLoad
      };
    }
    case CompanyActionType.GetAllCompaniesSuccess: {
      return {
        ...state,
        tickers: action.payLoad
      }
    }
    case CompanyActionType.CompanySelected: {
      return {
        ...state,
        selectedTicker: action.payLoad
      }
    }

    case CompanyActionType.ComanyDetailRetrived: {
      return {
        ...state,
        companyDetail: action.payLoad
      }
    }
  }
}
