import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-login-modal-content',
  templateUrl: './login-modal-content.component.html',
  styleUrls: ['./login-modal-content.component.css'],
})
export class LoginModalContentComponent {
  loginForm: FormGroup;

  constructor(public modal: NgbActiveModal, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Itt kezeld a bejelentkezést
      // Példa: console.log(this.loginForm.value);
      this.modal.close('Save click');
    }
  }
}
