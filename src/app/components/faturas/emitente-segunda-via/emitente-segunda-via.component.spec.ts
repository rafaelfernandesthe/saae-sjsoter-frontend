import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitenteSegundaViaComponent } from './emitente-segunda-via.component';

describe('EmitenteSegundaViaComponent', () => {
  let component: EmitenteSegundaViaComponent;
  let fixture: ComponentFixture<EmitenteSegundaViaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmitenteSegundaViaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitenteSegundaViaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
