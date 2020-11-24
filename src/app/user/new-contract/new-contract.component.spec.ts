/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewContractComponent } from './new-contract.component';

describe('NewContractComponent', () => {
  let component: NewContractComponent;
  let fixture: ComponentFixture<NewContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
