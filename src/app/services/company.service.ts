import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { HttpClient } from '@angular/common/http';
import { APIEndpoints } from '../helpers/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  registerCompany(company: Company) {
    console.log(`calling company api -- register`, company);
    return this.httpClient.post<Company>(`${APIEndpoints.API_ENDPOINT_COMPANY}/register`, company);
  }

  getCompany(companyCode: string) {
    console.log(`calling company api -- info`, companyCode);
    return this.httpClient.get<Company>(`${APIEndpoints.API_ENDPOINT_COMPANY}/info/${companyCode}`);
  }

  getAllCompanies() {
    console.log(`calling company api -- getall`);
    return this.httpClient.get<Company[]>(`${APIEndpoints.API_ENDPOINT_COMPANY}/getall`);
  }

  deleteCompany(companyCode: string) {
    console.log(`calling company api -- delete`);
    return this.httpClient.delete(`${APIEndpoints.API_ENDPOINT_COMPANY}/delete/${companyCode}`);
  }

  constructor(private httpClient: HttpClient) { }}
