import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '(document:click)': 'onClick($event)'
  }
})
export class MenuComponent implements OnInit {
  data: any;
  elementRef: any;

  @Input() set appData(val: any) {
    this.data = val;
  }

  constructor(private _eref: ElementRef) {}

  ngOnInit() {}
  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target))
      if (event['screenX'] > 83) {
        // or some similar check
        const panel = document.getElementsByClassName('left-panel')[0];
        //const body = document.getElementsByTagName('body')[0];

        panel.classList.remove('override-panel');
        //body.classList.remove('black-panel');
      }
  }

  toggleClass() {
    const panel = document.getElementsByClassName('left-panel')[0];
    //const body = document.getElementsByTagName('body')[0];
    panel.classList.remove('override-panel');
    panel.classList.add('override-panel');
    //body.classList.remove('black-panel');
    //body.classList.add('black-panel');
    //if(this.onClick) panel.classList.remove('override-panel');
  }
}
