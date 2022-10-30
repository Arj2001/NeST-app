import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLeaveStatusComponent } from './emp-leave-status.component';

describe('EmpLeaveStatusComponent', () => {
  let component: EmpLeaveStatusComponent;
  let fixture: ComponentFixture<EmpLeaveStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpLeaveStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpLeaveStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
