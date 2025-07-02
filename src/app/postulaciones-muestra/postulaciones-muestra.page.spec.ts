import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostulacionesMuestraPage } from './postulaciones-muestra.page';

describe('PostulacionesMuestraPage', () => {
  let component: PostulacionesMuestraPage;
  let fixture: ComponentFixture<PostulacionesMuestraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesMuestraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
