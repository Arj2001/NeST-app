import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLogComponent } from './emp-log.component';

describe('EmpLogComponent', () => {
  let component: EmpLogComponent;
  let fixture: ComponentFixture<EmpLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
