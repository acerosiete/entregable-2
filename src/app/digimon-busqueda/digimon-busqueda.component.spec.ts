import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonBusquedaComponent } from './digimon-busqueda.component';

describe('DigimonBusquedaComponent', () => {
  let component: DigimonBusquedaComponent;
  let fixture: ComponentFixture<DigimonBusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigimonBusquedaComponent]
    });
    fixture = TestBed.createComponent(DigimonBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
