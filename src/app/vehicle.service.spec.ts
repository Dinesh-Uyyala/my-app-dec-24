import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { VehicleComponent } from './vehicle.component';
import { VehicleService } from './vehicle.service'; // Import your VehicleService
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

describe('VehicleService', () => {
  let service: VehicleService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Ensure HttpClientModule is imported
      providers: [VehicleService] // Ensure VehicleService is provided
    });
    service = TestBed.inject(VehicleService); // Inject the service
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Check if the service is created successfully
  });
});
