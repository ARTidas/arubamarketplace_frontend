import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {
  registerForm: any = [];

  constructor(
    private modalService: NgbModal,
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService // Injektáld be a RegistrationService-t
  ) {
    this.registerForm = this.formBuilder.group({
      email: [''],
      password: [''],
      passwordConfirmation: ['']
    });
    
  }

  onSubmit() {
    
      const formData = this.registerForm.value;
      console.log(formData)
      this.registrationService.registerUser(formData).subscribe(response => {
        // Kezeld a szerver válaszát itt
        console.log('Sikeres regisztráció', response);
      }, error => {
        console.error('Hiba történt a regisztráció során', error);
      });
     
    }
  }

