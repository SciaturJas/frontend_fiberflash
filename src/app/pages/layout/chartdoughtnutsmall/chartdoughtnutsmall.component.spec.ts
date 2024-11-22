import { ComponentFixture, TestBed } from '@angular/core/testing';

import { chartdoughnutsmallComponent } from './chartdoughtnutsmall.component';

describe('chartdoughnutsmallComponent', () => {
  let component: chartdoughnutsmallComponent;
  let fixture: ComponentFixture<chartdoughnutsmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [chartdoughnutsmallComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(chartdoughnutsmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
