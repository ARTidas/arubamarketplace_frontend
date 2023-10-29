// register-modal.component.ts

import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {
  registerForm: FormGroup;
  email: string = ''; // Az email értékét a regisztrációs komponenstől kapjuk meg

  constructor(
    private modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService
  ) {
    this.registerForm = this.formBuilder.group({
      email: [this.email],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.valid) {
      const { email, password, passwordConfirmation } = this.registerForm.value;
      this.registrationService.register(email, password).subscribe(
        () => {
          this.modal.close('success'); // Sikeres regisztráció esetén zárjuk be a modalt
        },
        (error) => {
          console.error(error);
          this.modal.close('error'); // Hiba esetén zárjuk be a modalt
        }
      );
    }
  }
}
