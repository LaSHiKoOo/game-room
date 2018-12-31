import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-white-widget',
  templateUrl: './white-widget.component.html',
  styleUrls: ['./white-widget.component.scss']
})
export class WhiteWidgetComponent implements OnInit {
  iconClass = '';
  iconColor = '';
  currency = '';
  title = '';
  value = 0;
  widget: any;

  @Input() set widgetContent(val: any) {
    this.widget = val;
  }
  get widgetValue() {
    return this.widget.value;
  }
  constructor() {}

  ngOnInit() {}
}
