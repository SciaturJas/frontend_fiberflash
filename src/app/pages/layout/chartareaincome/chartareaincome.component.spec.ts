import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartareaincomeComponent } from './chartareaincome.component';

describe('ChartareaincomeComponent', () => {
  let component: ChartareaincomeComponent;
  let fixture: ComponentFixture<ChartareaincomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartareaincomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartareaincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
