import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQueryFormComponent } from './new-query-form.component';

describe('NewQueryFormComponent', () => {
  let component: NewQueryFormComponent;
  let fixture: ComponentFixture<NewQueryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQueryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
