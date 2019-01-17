import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent implements OnInit {
  @ViewChild('productName') productName: ElementRef;
  @ViewChild('productPrice') productPrice: ElementRef;
  @ViewChild('productQuantity') productQuantity: ElementRef;

  @ViewChild('drinkCheck') drinkCheck: ElementRef;
  @ViewChild('chillCheck') chillCheck: ElementRef;

  product = {
    id: 0,
    name: '',
    price: 0,
    currency: '₾',
    quantity: 0,
    icon: '../assets/images/shop/cola.svg',
    class: 'badge badge-complete',
    status: 'მარაგშია'
  };

  @Input() data;
  constructor() {}

  ngOnInit() {}

  addProduct() {
    this.product.id = Math.round(Math.random() * 1000);
    this.product.name = this.productName.nativeElement.value;
    this.product.price = parseInt(this.productPrice.nativeElement.value, 10);
    this.product.quantity = parseInt(
      this.productQuantity.nativeElement.value,
      10
    );
    this.product.class =
      parseInt(this.productQuantity.nativeElement.value, 10) > 0
        ? 'badge badge-complete'
        : 'badge badge-danger';
    this.product.status =
      parseInt(this.productQuantity.nativeElement.value, 10) > 0
        ? 'მარაგშია'
        : 'ამოიწურა';

    if (this.drinkCheck.nativeElement.checked) {
      this.product.icon = '../../assets/images/shop/cola.svg';
    } else if (this.chillCheck.nativeElement.checked) {
      this.product.icon = '../../assets/images/shop/hookah.svg';
    }
    this.data.addProduct(this.product);
    this.data.changeState('productList');
  }
}
