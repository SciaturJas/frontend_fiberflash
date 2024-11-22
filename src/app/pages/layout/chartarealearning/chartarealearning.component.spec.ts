import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartarealearningComponent } from './chartarealearning.component';

describe('ChartarealearningComponent', () => {
  let component: ChartarealearningComponent;
  let fixture: ComponentFixture<ChartarealearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartarealearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartarealearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
