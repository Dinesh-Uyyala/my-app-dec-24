import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms'; // to handle ngModel binding

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [FormsModule], // Required for ngModel binding
    });

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the calculator component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize num1 and num2 to 0', () => {
    expect(component.num1).toBe(0);
    expect(component.num2).toBe(0);
  });

  it('should initialize sum to 0', () => {
    expect(component.sum).toBe(0);
  });

  it('should add num1 and num2 correctly when the add method is called', () => {
    component.num1 = 5;
    component.num2 = 3;
    component.add();
    expect(component.sum).toBe(8);
  });

  it('should update sum when num1 and num2 values change', () => {
    component.num1 = 10;
    component.num2 = 15;
    fixture.detectChanges();
    component.add();
    expect(component.sum).toBe(25);
  });

  it('should bind num1 and num2 with the input fields', () => {
    const num1Input = fixture.nativeElement.querySelector('input:nth-child(1)');
    const num2Input = fixture.nativeElement.querySelector('input:nth-child(3)');
    num1Input.value = '7';
    num2Input.value = '8';
    num1Input.dispatchEvent(new Event('input'));
    num2Input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.num1).toBe(7);
    expect(component.num2).toBe(8);
  });

  it('should display the correct sum in the template', () => {
    component.num1 = 6;
    component.num2 = 4;
    component.add();
    fixture.detectChanges();
    const sumText = fixture.nativeElement.querySelector('h4').textContent;
    expect(sumText).toContain('sum: 10');
  });

  it('should log num1 and num2 to the console when add is called', () => {
    spyOn(console, 'log');
    component.num1 = 2;
    component.num2 = 3;
    component.add();
    expect(console.log).toHaveBeenCalledWith(2, 3);
  });
});
