import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpcComponent } from './ipc.component';

describe('IpcComponent', () => {
  let component: IpcComponent;
  let fixture: ComponentFixture<IpcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpcComponent]
    });
    fixture = TestBed.createComponent(IpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
