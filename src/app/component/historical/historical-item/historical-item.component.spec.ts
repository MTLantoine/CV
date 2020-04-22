import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalItemComponent } from './historical-item.component';

describe('HistoricalItemComponent', () => {
  let component: HistoricalItemComponent;
  let fixture: ComponentFixture<HistoricalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
