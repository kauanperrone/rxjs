import { TestBed } from '@angular/core/testing';

import { LivroService } from './livro.service';

describe('LivroService', () => {
  let service: LivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${LivroService.prototype.buscarLivros.name} should return an object when called`, (done) => {
    service.buscarLivros("Angular").subscribe((retornoApi) => {
      expect(typeof retornoApi).toBe("Object");
      done();
    })
  })
});
