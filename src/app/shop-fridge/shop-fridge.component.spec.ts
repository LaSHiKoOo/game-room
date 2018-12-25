import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFridgeComponent } from './shop-fridge.component';

describe('ShopFridgeComponent', () => {
  let component: ShopFridgeComponent;
  let fixture: ComponentFixture<ShopFridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
