import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheBeneficioComponent } from './detalhe-beneficio.component';

describe('DetalheBeneficioComponent', () => {
  let component: DetalheBeneficioComponent;
  let fixture: ComponentFixture<DetalheBeneficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheBeneficioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
