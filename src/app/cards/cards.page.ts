import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  taxes = [
    {
      name: 'W2 (Federal)',
      description: '2017 Form W-2 Wage & Tax Statement'
    },
    {
      name: 'W4 (Federal)',
      description: '2017 Employee\'s Withholding Allowance Certificate'
    },
    {
      name: 'NJ-W4 (state)',
      description: '2017 Employee\'s Withholding Allowance Certificate'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
