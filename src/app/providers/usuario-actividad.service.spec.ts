import { TestBed } from '@angular/core/testing';

import { UsuarioActividadService } from './usuario-actividad.service';

describe('UsuarioActividadService', () => {
  let service: UsuarioActividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioActividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
