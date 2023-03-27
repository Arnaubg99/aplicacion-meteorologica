import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronosticoProximosDiasComponent } from './pronostico-proximos-dias.component';

describe('PronosticoProximosDiasComponent', () => {
  let component: PronosticoProximosDiasComponent;
  let fixture: ComponentFixture<PronosticoProximosDiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronosticoProximosDiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PronosticoProximosDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
