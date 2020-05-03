import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoRegistroComponent } from './equipo-registro.component';

describe('EquipoRegistroComponent', () => {
  let component: EquipoRegistroComponent;
  let fixture: ComponentFixture<EquipoRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
