import { TestBed } from '@angular/core/testing';

import { PainelService } from './components/template/views/painel/painel.service';

describe('PainelService', () => {
  let service: PainelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PainelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
