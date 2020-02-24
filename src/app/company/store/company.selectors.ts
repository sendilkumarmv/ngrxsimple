import { IAppState } from 'src/app/app.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectFeature = createFeatureSelector<IAppState>('companyFeature');

export const selectFeatureRegion = createSelector(
  selectFeature, (state: IAppState) =>state.exchangeRegion);

export const selectFeatureTickers = createSelector(
    selectFeature, (state: IAppState) => state.tickers);

export const selectCompanyDetail = createSelector(
  selectFeature, (state: IAppState) => state.companyDetail
);

export const selectedTicker = createSelector(
  selectFeature, (state: IAppState) => state.selectedTicker
)
