import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  ngOnInit() {
  }

  stockId: string;
  stockPrice: string;
  stockCreatedDate: Date;
  companyCode: string;

  constructor() {
      this.stockId = '';
      this.stockPrice = '';
      this.stockCreatedDate = new Date();
      this.companyCode = '';
  }

}
