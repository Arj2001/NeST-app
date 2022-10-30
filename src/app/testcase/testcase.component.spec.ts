import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestcaseComponent } from './testcase.component';

describe('TestcaseComponent', () => {
  let component: TestcaseComponent;
  let fixture: ComponentFixture<TestcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it("should btn disabled", () => {
  fixture.detectChanges();
  const myBtn = fixture.debugElement.query(By.css("button"))
  expect(myBtn.nativeElement.disabled).toBeTruthy()
 })
});
