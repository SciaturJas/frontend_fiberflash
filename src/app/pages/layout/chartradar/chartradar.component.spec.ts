import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartradarComponent } from './chartradar.component';

describe('ChartradarComponent', () => {
  let component: ChartradarComponent;
  let fixture: ComponentFixture<ChartradarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartradarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartradarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
