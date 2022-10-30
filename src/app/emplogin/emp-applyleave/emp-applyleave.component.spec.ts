import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpApplyleaveComponent } from './emp-applyleave.component';

describe('EmpApplyleaveComponent', () => {
  let component: EmpApplyleaveComponent;
  let fixture: ComponentFixture<EmpApplyleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpApplyleaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpApplyleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
