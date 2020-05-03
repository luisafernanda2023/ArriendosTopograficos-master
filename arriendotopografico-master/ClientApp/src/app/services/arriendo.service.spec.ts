import { TestBed } from '@angular/core/testing';

import { ArriendoService } from './arriendo.service';

describe('ArriendoService', () => {
  let service: ArriendoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArriendoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
