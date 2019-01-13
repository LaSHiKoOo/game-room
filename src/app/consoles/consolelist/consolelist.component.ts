import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consolelist',
  templateUrl: './consolelist.component.html',
  styleUrls: ['./consolelist.component.scss']
})
export class ConsolelistComponent implements OnInit {
  tableColumns = ['#', 'Icon', 'ID', ' სახელი', 'ფასი', 'სტატუსი'];
  tableContent = [
    {
      id: 5634,
      name: 'კონსოლი 1',
      product: '4',
      danger: false,
      class: 'badge badge-complete',
      status: 'სტანდარტი'
    },
    {
      id: 5634,
      name: 'კონსოლი 2',
      product: '4',
      danger: false,
      class: 'badge badge-complete',
      status: 'სტანდარტი'
    },
    {
      id: 5634,
      name: 'სურაკასტრა',
      product: '8',
      danger: true,
      class: 'badge badge-pending',
      status: 'VIP'
    },
    {
      id: 5634,
      name: 'Don Elguja',
      product: '4',
      danger: true,
      class: 'badge badge-complete',
      status: 'სტანდარტი'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: '8',
      class: 'badge badge-pending',
      danger: false,
      status: 'VIP'
    },

    {
      id: 5634,
      name: 'Don პუfი',
      product: '4',
      danger: false,
      class: 'badge badge-complete',
      status: 'სტანდარტი'
    },
    {
      id: 5634,
      name: 'პეპელა',
      product: '2',
      danger: false,
      class: 'badge badge-complete',
      status: 'სტანდარტი'
    }
  ];

  tableHeading = 'კონსოლები';

  constructor() {}

  ngOnInit() {}
}
