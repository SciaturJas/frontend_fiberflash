import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartbarpinkComponent } from './chartbarpink.component';

describe('ChartbarpinkComponent', () => {
  let component: ChartbarpinkComponent;
  let fixture: ComponentFixture<ChartbarpinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartbarpinkComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartbarpinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
