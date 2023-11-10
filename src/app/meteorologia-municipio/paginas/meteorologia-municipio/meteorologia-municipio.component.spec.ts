import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorologiaMunicipioComponent } from './meteorologia-municipio.component';

describe('MeteorologiaMunicipioComponent', () => {
  let component: MeteorologiaMunicipioComponent;
  let fixture: ComponentFixture<MeteorologiaMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeteorologiaMunicipioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteorologiaMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
