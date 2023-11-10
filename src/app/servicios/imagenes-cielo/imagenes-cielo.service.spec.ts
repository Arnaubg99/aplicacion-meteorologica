import { TestBed } from '@angular/core/testing';

import { ImagenesCieloService } from './imagenes-cielo.service';

describe('ImagenesCieloService', () => {
  let service: ImagenesCieloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenesCieloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
