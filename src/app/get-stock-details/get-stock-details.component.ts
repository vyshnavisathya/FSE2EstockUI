import { Component, OnInit } from '@angular/core';
import * as _moment from 'moment';
import { Moment } from 'moment';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { StockListComponent } from '../models/stock-list.component';


const moment = _moment;

@Component({
  selector: 'app-get-stock-details',
  templateUrl: './get-stock-details.component.html',
  styleUrls: ['./get-stock-details.component.scss']
})
export class GetStockDetailsComponent implements OnInit {

  active = true;

  companyCodeIn: string;
  companyCodeOut: string;
  startDateIn: Moment;
  endDateIn: Moment;
  stocks: StockListComponent;
  isSuccess: boolean;

  stockViewForm = new FormGroup({
    companyCode: new FormControl('', [Validators.required]),
    startDate: new FormControl(moment(), [Validators.required]),
    endDate: new FormControl(moment(), [Validators.required])
  });

  constructor(private router: Router, private stockService: StockService) {
    this.companyCodeIn = '';
    this.companyCodeOut = '';
    this.startDateIn = moment();
    this.endDateIn = moment();
    this.stocks = new StockListComponent();
    this.isSuccess = false;
  }

  ngOnInit(): void {
  }

  // getter/setter
  get companyCode() {
    return this.stockViewForm.get('companyCode');
  }

  set companyCode(fmCompanyCode: any) {
    this.stockViewForm.setValue({
      companyCode: fmCompanyCode.value
    });
  }

  get startDate() {
    return this.stockViewForm.get('startDate');
  }

  set startDate(fmStartDate: any) {
    this.stockViewForm.setValue({
      startDate: fmStartDate.value
    });
  }

  get endDate() {
    return this.stockViewForm.get('endDate');
  }

  set endDate(fmEndDate: any) {
    this.stockViewForm.setValue({
      endDate: fmEndDate.value
    });
  }

  getCompanyCodeBlankMessage() {
    return this.companyCode.hasError('required') ? 'company code field cannot be blank' : '';
  }

  getStartDateBlankMessage() {
    return this.startDate.hasError('required') ? 'start date field cannot be blank' : '';
  }

  getEndDateBlankMessage() {
    return this.endDate.hasError('required') ? 'end date field cannot be blank' : '';
  }

  viewStocks(stockViewFormDir: FormGroupDirective) {
    console.log("Getting stocks of a company...", this.startDateIn.toISOString().substring(0, 10));
    this.stockService.viewStock(this.companyCodeIn, this.startDateIn.toISOString().substring(0, 10), this.endDateIn.toISOString().substring(0, 10)).subscribe(
      data => {
        console.log('api call success', data);
        this.isSuccess = true;
        this.companyCodeOut = this.companyCodeIn;
        this.stocks = data;
        stockViewFormDir.resetForm();
        this.stockViewForm.reset();
      },
      err => {
        console.log('api call failed', err);
        alert(err.error.message);
      }
    );
  }

}
