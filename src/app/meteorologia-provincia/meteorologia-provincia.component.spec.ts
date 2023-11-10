import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorologiaProvinciaComponent } from './meteorologia-provincia.component';

describe('MeteorologiaProvinciaComponent', () => {
  let component: MeteorologiaProvinciaComponent;
  let fixture: ComponentFixture<MeteorologiaProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeteorologiaProvinciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeteorologiaProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
