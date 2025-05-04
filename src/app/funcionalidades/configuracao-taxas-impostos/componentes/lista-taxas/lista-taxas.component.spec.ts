import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTaxasComponent } from './lista-taxas.component';

describe('ListaTaxasComponent', () => {
  let component: ListaTaxasComponent;
  let fixture: ComponentFixture<ListaTaxasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTaxasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTaxasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
