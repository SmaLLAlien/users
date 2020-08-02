import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {NO_ERRORS_SCHEMA, Renderer2} from '@angular/core';
import {RendererStub} from './shared/mocks/rendererStub';

describe('AppComponent', () => {
  let renderer: Renderer2;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: Renderer2, useClass: RendererStub}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    renderer = TestBed.inject(Renderer2);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
