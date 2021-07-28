import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-company-details',
  templateUrl: './get-company-details.component.html',
  styleUrls: ['./get-company-details.component.scss']
})
export class GetCompanyDetailsComponent implements OnInit {

  active = true;
  company: Company;
  isPresent = false;

  constructor(private companyService: CompanyService, private router: Router) {
    this.company = new Company();
  }

  ngOnInit(): void {
  }

  getCompany(companyCode: string): void {
    if (companyCode === '') {
      this.company = new Company();
    }
    else {
      this.companyService.getCompany(companyCode).subscribe(
        data => {
          console.log('company data... ', data);
          this.company = data;
          this.isPresent = true;
        },
        err => {
          console.log('error...', err);
        }
      );
    }
  }

  reset(companyCode: string): void {
    if (companyCode === '') {
      this.company = new Company();
    }
  }

  deleteCompany(): void { 
    this.companyService.deleteCompany(this.company.companyCode).subscribe(
      data => {
        console.log('Delete successfull...', data);
        this.company = new Company();
        // save current route first
        const currentRoute = this.router.url;
    
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([currentRoute]); // navigate to same route
        }); 
      },
      err => {
        console.log('Error while delete...', err.message);
      }
    )
  }

  isValid() {
    if (this.company.companyCode === '') {
      return false;
    }
    return true;
  }
}
