import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriendoConsultaComponent } from './arriendo-consulta.component';

describe('ArriendoConsultaComponent', () => {
  let component: ArriendoConsultaComponent;
  let fixture: ComponentFixture<ArriendoConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArriendoConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArriendoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
