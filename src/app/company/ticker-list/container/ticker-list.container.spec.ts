import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerListContainer } from './ticker-list.container';

describe('TickerListComponent', () => {
  let component: TickerListContainer;
  let fixture: ComponentFixture<TickerListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickerListContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
