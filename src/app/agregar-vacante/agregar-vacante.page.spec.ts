import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarVacantePage } from './agregar-vacante.page';

describe('AgregarVacantePage', () => {
  let component: AgregarVacantePage;
  let fixture: ComponentFixture<AgregarVacantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarVacantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
