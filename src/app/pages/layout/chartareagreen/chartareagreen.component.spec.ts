import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartareagreenComponent } from './chartareagreen.component';

describe('ChartareagreenComponent', () => {
  let component: ChartareagreenComponent;
  let fixture: ComponentFixture<ChartareagreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartareagreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartareagreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
