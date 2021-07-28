
export class Company {

    companyCode: string;
    companyName: string;
    companyCEO: string;
    companyTurnOver: string;
    companyWebsite: string;
    stockExchange: string;
    latestStockPrice: number;

    constructor() {
        this.companyCode = '';
        this.companyName = '';
        this.companyCEO = '';
        this.companyTurnOver = '';
        this.companyWebsite = '';
        this.stockExchange = '';
        this.latestStockPrice = 0;
    }
}