import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersComponent} from './users.component';
import {UsersService} from '../../services/users.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {UsersServiceStub} from '../../../../shared/mocks/usersServiceStub';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService: UsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        {provide: UsersService, useClass: UsersServiceStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    userService = TestBed.inject(UsersService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
