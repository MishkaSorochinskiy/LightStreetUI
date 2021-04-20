/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdministerComponent } from './administer.component';

describe('AdministerComponent', () => {
  let component: AdministerComponent;
  let fixture: ComponentFixture<AdministerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
