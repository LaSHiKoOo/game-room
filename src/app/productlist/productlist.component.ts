import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  tableColumns = ['#', 'Icon', 'ID', 'სახელი', 'ფასი', 'რაოდენობა', 'სტატუსი'];
  tableContent = [
    {
      id: 5634,
      name: 'კოკა კოლა',
      price: 1.3,
      quantity: 30,
      danger: false,
      class: 'badge badge-complete',
      status: 'მარაგშია'
    },
    {
      id: 5635,
      name: 'არსი კოლა',
      price: 1.2,
      quantity: 30,
      danger: false,
      class: 'badge badge-complete',
      status: 'მარაგშია'
    },
    {
      id: 5636,
      name: 'ფანტა ლიმონის',
      price: 1.1,
      quantity: 30,
      danger: true,
      class: 'badge badge-complete',
      status: 'მარაგშია'
    },
    {
      id: 5638,
      name: 'პეპსი',
      price: '1.0',
      quantity: 0,
      danger: true,
      class: 'badge badge-danger',
      status: 'ამოიწურა'
    }
  ];

  tableHeading = 'თანამშრომელთა სია';

  constructor() {}

  ngOnInit() {}
}
