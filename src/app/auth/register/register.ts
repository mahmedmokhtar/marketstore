import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SHARED } from '../../shared/shared';

@Component({
  selector: 'app-resighter',
  imports: [SHARED],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Resighter {
  resighterForm: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder) {
    this.resighterForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordsMatchValidator });
  }

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ notMatch: true });
    } else {
      const errors = form.get('confirmPassword')?.errors;
      if (errors) {
        delete errors['notMatch'];
        if (Object.keys(errors).length === 0) {
          form.get('confirmPassword')?.setErrors(null);
        } else {
          form.get('confirmPassword')?.setErrors(errors);
        }
      }
    }
    return null;
  }

  get resighter() {
    return this.resighterForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.resighterForm.invalid) {
      return;
    }
    // هنا يمكنك تنفيذ عملية التسجيل
    console.log(this.resighterForm.value);
  }
}
