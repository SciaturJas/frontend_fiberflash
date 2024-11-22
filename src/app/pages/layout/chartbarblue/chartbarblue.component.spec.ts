import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartbarblueComponent } from './chartbarblue.component';

describe('ChartbarblueComponent', () => {
  let component: ChartbarblueComponent;
  let fixture: ComponentFixture<ChartbarblueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartbarblueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartbarblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
