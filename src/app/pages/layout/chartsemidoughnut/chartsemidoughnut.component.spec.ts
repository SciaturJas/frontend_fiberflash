import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsemidoughnutComponent } from './chartsemidoughnut.component';

describe('ChartsemidoughnutComponent', () => {
  let component: ChartsemidoughnutComponent;
  let fixture: ComponentFixture<ChartsemidoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsemidoughnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsemidoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
