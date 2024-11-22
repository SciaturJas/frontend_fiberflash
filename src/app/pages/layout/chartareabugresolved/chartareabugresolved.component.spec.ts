import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartareabugresolvedComponent } from './chartareabugresolved.component';

describe('ChartareabugresolvedComponent', () => {
  let component: ChartareabugresolvedComponent;
  let fixture: ComponentFixture<ChartareabugresolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartareabugresolvedComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartareabugresolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
