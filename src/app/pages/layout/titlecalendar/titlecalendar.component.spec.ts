import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitlecalendarComponent } from './titlecalendar.component';

describe('TitlecalendarComponent', () => {
  let component: TitlecalendarComponent;
  let fixture: ComponentFixture<TitlecalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitlecalendarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlecalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
