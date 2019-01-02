import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopTimeComponent } from './stop-time.component';

describe('StopTimeComponent', () => {
  let component: StopTimeComponent;
  let fixture: ComponentFixture<StopTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
