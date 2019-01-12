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
      product: 1.3,
      quantity: 30,
      danger: false,
      class: 'badge badge-complete',
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Zauri',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      class: 'badge badge-danger',
      status: 'ამოიწურა'
    },
    {
      id: 5634,
      name: 'Don Vito',
      product: 'ხინკალი',
      quantity: 3,
      danger: true,
      class: 'badge badge-danger',
      status: 'ამოიწურა'
    },
    {
      id: 5634,
      name: 'Don Elguja',
      product: 'ხინკალი',
      quantity: 10,
      danger: true,
      class: 'badge badge-danger',
      status: 'ამოიწურა'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      class: 'badge badge-complete',
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      class: 'badge badge-complete',
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      class: 'badge badge-complete',
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      class: 'badge badge-complete',
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      class: 'badge badge-complete',
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      class: 'badge badge-complete',
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      class: 'badge badge-complete',
      status: 'მარაგშია'
    }
  ];

  tableHeading = 'თანამშრომელთა სია';

  constructor() {}

  ngOnInit() {}
}
