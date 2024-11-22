import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartarearedComponent } from './chartareared.component';

describe('ChartarearedComponent', () => {
  let component: ChartarearedComponent;
  let fixture: ComponentFixture<ChartarearedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartarearedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartarearedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
