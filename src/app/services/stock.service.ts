import { Injectable } from '@angular/core';
import { APIEndpoints } from '../helpers/api-endpoints';
import { StockListComponent } from '../models/stock-list.component';
import { HttpClient } from '@angular/common/http';
import { StockComponent } from '../models/stock.component';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  addStock(stock: StockComponent) {
    console.log(`calling stock api -- register`, stock);
    return this.httpClient.post<StockComponent>(`${APIEndpoints.API_ENDPOINT_STOCK_COMMAND}/add/${stock.companyCode}`, stock);
  }

  viewStock(companyCodeIn: string, startDateIn: string, endDateIn: string) {
    console.log(`calling stock api -- get`);
    return this.httpClient.get<StockListComponent>(`${APIEndpoints.API_ENDPOINT_STOCK_QUERY}/get/${companyCodeIn}/${startDateIn}/${endDateIn}`);
  }

  constructor(private httpClient: HttpClient) { }}
