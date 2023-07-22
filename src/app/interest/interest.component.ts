/*
    ========================================================================================================================
    ; Title: interest.component.ts
    ; Author: Caitlynne Johnson
    ; Bellevue University
    ; Date: 7/21/23
    ; Description: Capstone project
    ========================================================================================================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  @Input() interest: number;

  constructor() { }

  ngOnInit(): void {
  }

}
