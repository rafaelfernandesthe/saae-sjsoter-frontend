import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBeneficiosComponent } from './lista-beneficios.component';

describe('ListaBeneficiosComponent', () => {
  let component: ListaBeneficiosComponent;
  let fixture: ComponentFixture<ListaBeneficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaBeneficiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
