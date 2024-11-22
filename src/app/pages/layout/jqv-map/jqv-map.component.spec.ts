import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqvMapComponent } from './jqv-map.component';

describe('JqvMapComponent', () => {
  let component: JqvMapComponent;
  let fixture: ComponentFixture<JqvMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqvMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JqvMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
