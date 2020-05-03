import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoConsultaComponent } from './equipo-consulta.component';

describe('EquipoConsultaComponent', () => {
  let component: EquipoConsultaComponent;
  let fixture: ComponentFixture<EquipoConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
