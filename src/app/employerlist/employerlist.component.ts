import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employerlist',
  templateUrl: './employerlist.component.html',
  styleUrls: ['./employerlist.component.scss']
})
export class EmployerlistComponent implements OnInit {
  tableColumns = ['#', 'Avatar', 'ID', 'სახელი', 'გვარი', 'დღე', 'სტატუსი'];
  tableContent = [
    {
      id: 123,
      name: 'სახელი',
      product: 'გვარი',
      quantity: 11,
      icon: '../../assets/images/user/boy.svg',
      class: 'badge badge-complete',
      status: 'working'
    },
    {
      id: 123,
      name: 'სახელი',
      product: 'გვარი',
      quantity: 11,
      icon: '../../assets/images/user/boy.svg',
      class: 'badge badge-pending',
      status: 'not working'
    },
    {
      id: 123,
      name: 'სახელი',
      product: 'გვარი',
      quantity: 11,
      icon: '../../assets/images/user/boy.svg',
      class: 'badge badge-complete',
      status: 'working'
    },
    {
      id: 123,
      name: 'სახელი',
      product: 'გვარი',
      quantity: 11,
      icon: '../../assets/images/user/boy.svg',
      class: 'badge badge-complete',
      status: 'working'
    }
  ];

  tableHeading = 'თანამშრომელთა სია';

  constructor() {}

  ngOnInit() {}
}
