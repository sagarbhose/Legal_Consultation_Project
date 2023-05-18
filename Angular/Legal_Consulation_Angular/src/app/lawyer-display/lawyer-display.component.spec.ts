import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerDisplayComponent } from './lawyer-display.component';

describe('LawyerDisplayComponent', () => {
  let component: LawyerDisplayComponent;
  let fixture: ComponentFixture<LawyerDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawyerDisplayComponent]
    });
    fixture = TestBed.createComponent(LawyerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
