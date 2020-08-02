import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MonthsComponent} from './months.component';

describe('MonthsComponent', () => {
  let component: MonthsComponent;
  let fixture: ComponentFixture<MonthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onHover', () => {
    it('should emit value', () => {
      const spy = spyOn(component.hoveredMonth, 'emit');
      component.onHover('July');
      expect(spy).toHaveBeenCalledWith('July');
    });
  });

  describe('setColor', () => {
    it('should return red class if usersQuantity bigger 11', () => {
      const month = {month: 'July', usersQuantity: 12};
      const result = component.setColor(month);
      expect(result).toEqual('month--red');
    });
    it('should return gray class if usersQuantity less then 0', () => {
      const month = {month: 'July', usersQuantity: 0};
      const result = component.setColor(month);
      expect(result).toEqual('month--gray');
    });
    it('should return blue class if usersQuantity less then 3', () => {
      const month = {month: 'July', usersQuantity: 3};
      const result = component.setColor(month);
      expect(result).toEqual('month--blue');
    });
    it('should return green class if usersQuantity less then 7', () => {
      const month = {month: 'July', usersQuantity: 7};
      const result = component.setColor(month);
      expect(result).toEqual('month--green');
    });
  });
});
