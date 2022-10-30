import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSecComponent } from './search-sec.component';

describe('SearchSecComponent', () => {
  let component: SearchSecComponent;
  let fixture: ComponentFixture<SearchSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
