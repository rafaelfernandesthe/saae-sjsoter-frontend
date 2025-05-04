import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheTaxaComponent } from './detalhe-taxa.component';

describe('DetalheTaxaComponent', () => {
  let component: DetalheTaxaComponent;
  let fixture: ComponentFixture<DetalheTaxaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheTaxaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheTaxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
