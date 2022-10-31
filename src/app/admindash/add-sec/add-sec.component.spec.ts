import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecComponent } from './add-sec.component';

describe('AddSecComponent', () => {
  let component: AddSecComponent;
  let fixture: ComponentFixture<AddSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
