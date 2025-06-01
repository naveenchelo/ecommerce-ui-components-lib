import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ecom-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() label: string = 'Button';
  @Input() type: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

  get btnClass() {
    return {
      'btn': true,
      'btn-primary': this.type === 'primary',
      'btn-secondary': this.type === 'secondary',
      'btn-danger': this.type === 'danger',
      'btn-success': this.type === 'success',
      'btn-warning': this.type === 'warning',
      'btn-info': this.type === 'info',
      'btn-light': this.type === 'light',
      'btn-dark': this.type === 'dark'
    };
  }

}
