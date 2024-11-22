import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartareabugraisedComponent } from './chartareabugraised.component';

describe('ChartareabugraisedComponent', () => {
  let component: ChartareabugraisedComponent;
  let fixture: ComponentFixture<ChartareabugraisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartareabugraisedComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartareabugraisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
