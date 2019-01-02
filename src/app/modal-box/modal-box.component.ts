import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.scss']
})
export class ModalBoxComponent implements OnInit {
  @Input() modalContent;
  @Output() closeModal = new EventEmitter<string>();
  @Output() sellItems = new EventEmitter<number>();
  @Output() stopTimer = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}
}
