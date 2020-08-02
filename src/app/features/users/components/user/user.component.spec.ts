import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserComponent} from './user.component';
import {IUser} from '../../models/user.models';

const user: IUser = {
  id: '1',
  firstName: 'firstName',
  lastName: 'lastName',
  dob: '2019-09-19T09:34:32.083Z'
};

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
