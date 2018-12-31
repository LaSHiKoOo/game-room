import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  saleItems = [];
  tmpSaleItems = [];
  tmpItemsList = [];

  @Input() modalContent;
  @Output() sellItems = new EventEmitter<number>();
  @Output() closeModal = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.tmpSaleItems = this.modalContent.info[0];
    this.tmpItemsList = this.modalContent.info[1];
    let singleItem = {
      name: '',
      quantity: 0,
      price: 0
    };

    for (let i = 0; i < this.tmpSaleItems.length; i++) {
      for (let j = 0; j < this.tmpItemsList.length; j++) {
        if (this.tmpSaleItems[i].index === j) {
          singleItem.name = this.tmpItemsList[j].item;
          singleItem.quantity = this.tmpSaleItems[i].quantity;
          singleItem.price =
            (this.tmpItemsList[j].price * 100 * this.tmpSaleItems[i].quantity) /
            100;
          this.saleItems.push(singleItem);
          singleItem = {
            name: '',
            quantity: 0,
            price: 0
          };
        }
      }
    }
  }
  doAction(type) {
    switch (type) {
      case 'accept': {
        for (let i = 0; i < this.tmpSaleItems.length; i++) {
          for (let j = 0; j < this.tmpItemsList.length; j++) {
            if (this.tmpSaleItems[i].index === j) {
              this.tmpItemsList[j].quantity -= this.tmpSaleItems[i].quantity;
            }
          }
        }
        this.sellItems.emit(this.fullPrice);
        break;
      }
      case 'decline': {
        this.closeModal.emit('');
        break;
      }
    }
  }
  get fullPrice() {
    let fullPrice = 0;
    this.saleItems.forEach(item => (fullPrice += item.price));
    return fullPrice;
  }
}
