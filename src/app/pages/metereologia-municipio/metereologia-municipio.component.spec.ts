import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetereologiaMunicipioComponent } from './metereologia-municipio.component';

describe('MetereologiaMunicipioComponent', () => {
  let component: MetereologiaMunicipioComponent;
  let fixture: ComponentFixture<MetereologiaMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetereologiaMunicipioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetereologiaMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
