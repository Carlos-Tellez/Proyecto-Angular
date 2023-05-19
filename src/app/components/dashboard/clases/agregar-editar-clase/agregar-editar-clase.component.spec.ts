import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarClaseComponent } from './agregar-editar-clase.component';

describe('AgregarEditarClaseComponent', () => {
  let component: AgregarEditarClaseComponent;
  let fixture: ComponentFixture<AgregarEditarClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarClaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
