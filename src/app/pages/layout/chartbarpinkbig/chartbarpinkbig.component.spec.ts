import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartbarpinkbigComponent } from './chartbarpinkbig.component';

describe('ChartbarpinkbigComponent', () => {
  let component: ChartbarpinkbigComponent;
  let fixture: ComponentFixture<ChartbarpinkbigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartbarpinkbigComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartbarpinkbigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
