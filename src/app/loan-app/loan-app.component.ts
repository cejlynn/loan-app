/*
    ========================================================================================================================
    ; Title: loan-app-component.ts
    ; Author: Caitlynne Johnson
    ; Bellevue University
    ; Date: 7/21/23
    ; Description: Capstone project
    ========================================================================================================================
*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-app',
  templateUrl: './loan-app.component.html',
  styleUrls: ['./loan-app.component.css']
})
export class LoanAppComponent implements OnInit {
  loanData: FormGroup; // sets up form group
  payment: number = 0;
  interest: number = 0; // variables set to 0 to avoid null

  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.loanData = this.fb.group({
      amount: [ '', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      interest: [ '', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      years: [ '', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
    })
  }

  get form() { return this.loanData.controls; }

  // calculates the loan
  calcResults() {
    let formValues = this.loanData.value;
    let amount = parseFloat(formValues.amount);
    let interest = parseFloat(formValues.interest);
    let years = parseFloat(formValues.years);
    let months = (years * 12);
    let ratePerPeriod = ((interest / 100) / 12);

    // formula provided by Professor Krasso

    this.payment =
    (amount * (ratePerPeriod * Math.pow((ratePerPeriod + 1), months))) / (Math.pow((1 + ratePerPeriod), months) - 1);
    this.interest = (this.payment * months) - amount;
  }

  // clears entries

  clearEntries() {
    this.payment = 0;
    this.interest = 0;
    this.loanData.reset();
  }

}
