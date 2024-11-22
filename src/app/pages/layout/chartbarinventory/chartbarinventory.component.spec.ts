import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartbarinventoryComponent } from './chartbarinventory.component';

describe('ChartbarinventoryComponent', () => {
  let component: ChartbarinventoryComponent;
  let fixture: ComponentFixture<ChartbarinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartbarinventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartbarinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
