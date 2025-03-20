import { CapitalDirective } from './capital.directive';
import { ElementRef } from '@angular/core';

describe('CapitalDirective', () => {
  it('should create an instance', () => {
    // Create a mock of ElementRef with a nativeElement property
    const mockElementRef = { nativeElement: { value: '' } };
    
    // Create an instance of the directive and pass the mock ElementRef
    const directive = new CapitalDirective(mockElementRef as ElementRef);

    // Check if the directive is created successfully
    expect(directive).toBeTruthy();
  });
});
