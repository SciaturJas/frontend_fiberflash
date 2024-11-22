import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartareanetworkComponent } from './chartareanetwork.component';

describe('ChartareanetworkComponent', () => {
  let component: ChartareanetworkComponent;
  let fixture: ComponentFixture<ChartareanetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartareanetworkComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartareanetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
