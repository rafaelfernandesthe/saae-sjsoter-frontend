import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheOrdemComponent } from './detalhe-ordem.component';

describe('DetalheOrdemComponent', () => {
  let component: DetalheOrdemComponent;
  let fixture: ComponentFixture<DetalheOrdemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheOrdemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheOrdemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
