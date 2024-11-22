import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartareablueComponent } from './chartareablue.component';

describe('ChartareablueComponent', () => {
  let component: ChartareablueComponent;
  let fixture: ComponentFixture<ChartareablueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartareablueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartareablueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
