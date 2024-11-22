import { ComponentFixture, TestBed } from '@angular/core/testing';

import { chartdoughtnutsocialComponent } from './chartdoughtnutsocial.component';

describe('chartdoughtnutsocialComponent', () => {
  let component: chartdoughtnutsocialComponent;
  let fixture: ComponentFixture<chartdoughtnutsocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [chartdoughtnutsocialComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(chartdoughtnutsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
