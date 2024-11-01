import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInputModel } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  enteredInititalValue = signal('0');
  enteredAnnualValue = signal('0');
  enteredExpectedRetureValue = signal('5');
  enteredDuration = signal('10');

  submit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInititalValue(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedRetureValue(),
      annualInvestment: +this.enteredAnnualValue(),
    });
  }
}
