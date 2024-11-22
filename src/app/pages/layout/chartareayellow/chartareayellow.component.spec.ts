import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartareayellowComponent } from './chartareayellow.component';

describe('ChartareayellowComponent', () => {
  let component: ChartareayellowComponent;
  let fixture: ComponentFixture<ChartareayellowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartareayellowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartareayellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
