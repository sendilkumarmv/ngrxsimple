import { Action } from '@ngrx/store';
import { CompanyTicker } from '../models/company-ticker.model';
import { CompanyDetail } from '../models/company-detail.model';

export enum CompanyActionType {
  GetAllCompanies = '[Company] Get All Companies',
  GetAllCompaniesSuccess = '[Company] Get All Companies Success',
  CompanySelected ='[Company] Company Selected',
  ComanyDetailRetrived = '[Company] Company Detailed Retrived'
}

export class GetAllCompaniesAction implements Action {
  public type = CompanyActionType.GetAllCompanies;
  constructor(public payLoad: string) {
  }
}

export class GetAllCompaniesSuccessAction implements Action {
  public readonly type = CompanyActionType.GetAllCompaniesSuccess;
  constructor(public payLoad: CompanyTicker[]) {
  }
}

export class CompanySelectedAction implements Action {
  public readonly type = CompanyActionType.CompanySelected;
  constructor(public payLoad: string){
  }
}

export class CompanyDetailRetrivedAction implements Action {
  public readonly type = CompanyActionType.ComanyDetailRetrived;
  constructor(public payLoad: CompanyDetail){
  }
}

export type CompanyActions =
  GetAllCompaniesAction
  | GetAllCompaniesSuccessAction
  | CompanySelectedAction
  | CompanyDetailRetrivedAction;
