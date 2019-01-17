import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: any;
  columns: any;
  title: string;

  @Input() set tableHeading(val: any) {
    this.title = val;
  }
  @Input() set tableColumns(val: any) {
    this.columns = val;
  }
  @Input() set tableData(vals: any) {
    console.log(vals);
    this.data = vals;
  }

  constructor() {}

  ngOnInit() {}
}
