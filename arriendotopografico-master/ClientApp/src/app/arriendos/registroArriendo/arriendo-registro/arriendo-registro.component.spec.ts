import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriendoRegistroComponent } from './arriendo-registro.component';

describe('ArriendoRegistroComponent', () => {
  let component: ArriendoRegistroComponent;
  let fixture: ComponentFixture<ArriendoRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArriendoRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArriendoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
