import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartareasocialComponent } from './chartareasocial.component';

describe('ChartareasocialComponent', () => {
  let component: ChartareasocialComponent;
  let fixture: ComponentFixture<ChartareasocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartareasocialComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartareasocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
