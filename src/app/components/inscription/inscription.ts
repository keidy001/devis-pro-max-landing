import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Demo } from '../../service/demo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscription',
  imports: [ReactiveFormsModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {
  isLoading = false;
  successMessage = '';
  private fb = inject(FormBuilder);
  private demoService = inject(Demo);
  private tostr = inject(ToastrService);

  demoForm = this.fb.group(
    {
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{8,15}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: this.passwordMatchValidator },
  );

  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }

    return null;
  }

  showPassword = false;
  showConfirmPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  submitForm() {
    if (this.demoForm.valid) {
      this.isLoading = true;
      let mdp = this.demoForm.value.password;
      this.demoService.sendDemoRequest(this.demoForm.value).subscribe({
        next: () => {
          this.tostr.success('Inscription effectuée avec succès ');
          this.successMessage = 'Votre mot de passe est : ' + mdp;
          this.demoForm.reset();
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          this.tostr.error("Erreur lors de l'envoi.");
        },
      });
    }
  }
}
