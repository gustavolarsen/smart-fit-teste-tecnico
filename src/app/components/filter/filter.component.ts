import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Output() filters = new EventEmitter<{}>();

  applyForm = new FormGroup({
    turn: new FormControl(''),
    showClosed: new FormControl(true)
  });

  submitApplication(): void {
    const turnValue = this.applyForm.get('turn')?.value;
    const showClosedValue = this.applyForm.get('showClosed')?.value;

    this.filters.emit({
      turn: turnValue,
      showClosed: showClosedValue
    });
  }

  resetForm() {
    this.applyForm.reset();
    this.applyForm.get('showClosed')?.setValue(true);
    this.filters.emit({
      turn: '',
      showClosed: true
    });
  }
}
