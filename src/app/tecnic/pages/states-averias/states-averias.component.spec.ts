import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesAveriasComponent } from './states-averias.component';

describe('StatesAveriasComponent', () => {
  let component: StatesAveriasComponent;
  let fixture: ComponentFixture<StatesAveriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatesAveriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatesAveriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
