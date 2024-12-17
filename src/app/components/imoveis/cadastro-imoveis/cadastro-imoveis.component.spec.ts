import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroImoveisComponent } from './cadastro-imoveis.component';

describe('CadastroImoveisComponent', () => {
  let component: CadastroImoveisComponent;
  let fixture: ComponentFixture<CadastroImoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroImoveisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
