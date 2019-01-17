import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  tableColumns = ['#', 'Icon', 'ID', 'სახელი', 'ფასი', 'რაოდენობა', 'სტატუსი'];

  @Input() data;
  tableHeading = 'თანამშრომელთა სია';

  constructor() {}

  ngOnInit() {}

  get tableContent(){
    return this.data.data.shopContent;
  }
}
