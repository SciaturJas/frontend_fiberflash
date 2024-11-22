import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartareaexpenseComponent } from './chartareaexpense.component';

describe('ChartareaexpenseComponent', () => {
  let component: ChartareaexpenseComponent;
  let fixture: ComponentFixture<ChartareaexpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartareaexpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartareaexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
