import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipioDestacadoComponent } from './municipio-destacado.component';

describe('MunicipioDestacadoComponent', () => {
  let component: MunicipioDestacadoComponent;
  let fixture: ComponentFixture<MunicipioDestacadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipioDestacadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MunicipioDestacadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
