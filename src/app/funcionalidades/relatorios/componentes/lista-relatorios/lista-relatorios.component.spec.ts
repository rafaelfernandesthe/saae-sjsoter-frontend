import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRelatoriosComponent } from './lista-relatorios.component';

describe('ListaRelatoriosComponent', () => {
  let component: ListaRelatoriosComponent;
  let fixture: ComponentFixture<ListaRelatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaRelatoriosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
