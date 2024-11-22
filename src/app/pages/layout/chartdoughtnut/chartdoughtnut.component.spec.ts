import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartdoughtnutComponent } from './chartdoughtnut.component';

describe('ChartdoughtnutComponent', () => {
  let component: ChartdoughtnutComponent;
  let fixture: ComponentFixture<ChartdoughtnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartdoughtnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartdoughtnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
