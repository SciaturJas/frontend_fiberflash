import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartbarredComponent } from './chartbarred.component';

describe('ChartbarredComponent', () => {
  let component: ChartbarredComponent;
  let fixture: ComponentFixture<ChartbarredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartbarredComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartbarredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
