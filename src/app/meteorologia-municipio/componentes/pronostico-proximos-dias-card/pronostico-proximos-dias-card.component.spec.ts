import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronosticoProximosDiasCardComponent } from './pronostico-proximos-dias-card.component';

describe('PronosticoProximosDiasCardComponent', () => {
  let component: PronosticoProximosDiasCardComponent;
  let fixture: ComponentFixture<PronosticoProximosDiasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PronosticoProximosDiasCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PronosticoProximosDiasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
