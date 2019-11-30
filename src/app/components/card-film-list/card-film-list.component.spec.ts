import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilmListComponent } from './card-film-list.component';

describe('CardFilmListComponent', () => {
  let component: CardFilmListComponent;
  let fixture: ComponentFixture<CardFilmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFilmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFilmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
