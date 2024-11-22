import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumdetailsComponent } from './forumdetails.component';

describe('ForumdetailsComponent', () => {
  let component: ForumdetailsComponent;
  let fixture: ComponentFixture<ForumdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
