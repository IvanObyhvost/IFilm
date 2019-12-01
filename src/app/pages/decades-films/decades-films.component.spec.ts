import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecadesFilmsComponent } from './decades-films.component';

describe('DecadesFilmsComponent', () => {
  let component: DecadesFilmsComponent;
  let fixture: ComponentFixture<DecadesFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecadesFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecadesFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
