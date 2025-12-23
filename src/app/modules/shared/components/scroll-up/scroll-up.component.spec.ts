import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScrollUpComponent } from './scroll-up.component';

describe('ScrollUpComponent', () => {
  let component: ScrollUpComponent;
  let fixture: ComponentFixture<ScrollUpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
