import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarraFiltroComponent } from './barra-filtro.component';

describe('BarraFiltroComponent', () => {
  let component: BarraFiltroComponent;
  let fixture: ComponentFixture<BarraFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraFiltroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BarraFiltroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
