import { TestBed } from '@angular/core/testing';

import { EnviaFomulario } from './envia-fomulario';

describe('EnviaFomulario', () => {
  let service: EnviaFomulario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviaFomulario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
