import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSalesComponent } from './state-sales.component';

describe('StateSalesComponent', () => {
  let component: StateSalesComponent;
  let fixture: ComponentFixture<StateSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
