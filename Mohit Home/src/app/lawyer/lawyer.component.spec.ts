import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerComponent } from './lawyer.component';

describe('LawyerComponent', () => {
  let component: LawyerComponent;
  let fixture: ComponentFixture<LawyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawyerComponent]
    });
    fixture = TestBed.createComponent(LawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
