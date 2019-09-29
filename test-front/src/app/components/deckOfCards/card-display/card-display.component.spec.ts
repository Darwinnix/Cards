import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDisplayComponent } from './card-display.component';

describe('CardDisplayComponent', () => {
  let component: CardDisplayComponent;
  let fixture: ComponentFixture<CardDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show test inputs', function () {
    component.value = 'test value';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.body').innerText).toEqual('test value');

  });

  it('should return Ace on init', function () {
    component.value = 1;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.value).toEqual('A');
  });

  it('should return Jack on init', function () {
    component.value = 11;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.value).toEqual('J');
  });

  it('should return Queen on init', function () {
    component.value = 12;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.value).toEqual('Q');
  });

  it('should return King on init', function () {
    component.value = 13;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.value).toEqual('K');
  });
});
