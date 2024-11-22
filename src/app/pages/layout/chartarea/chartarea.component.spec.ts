import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartareaComponent } from './chartarea.component';

describe('ChartareaComponent', () => {
  let component: ChartareaComponent;
  let fixture: ComponentFixture<ChartareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
