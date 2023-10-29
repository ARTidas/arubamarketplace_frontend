import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal  } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authentication } from '../authentication.service'; // Importáljuk az Authentication szolgáltatást
import { RegisterModalComponent } from '../register-modal/register-modal.component';

@Component({
  selector: 'app-login-modal-content',
  templateUrl: './login-modal-content.component.html',
  styleUrls: ['./login-modal-content.component.css'],
})
export class LoginModalContentComponent {
  loginForm: FormGroup;

  constructor(
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private authService: Authentication ,
    private modalService: NgbModal // Injektáljuk az Authentication szolgáltatást
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        () => {
          // A bejelentkezés sikeres volt, itt kezeld a bejelentkezést
          this.modal.close('Save click');
        },
        (error) => {
          // A bejelentkezés sikertelen, itt kezeld a hibát (például, hibaüzenet megjelenítése)
          console.error(error);
        }
      );
    }
  }
  openRegisterModal() {
    const modalRef = this.modalService.open(RegisterModalComponent);
    modalRef.result.then(
      (result) => {
        if (result === 'Save click') {
          // A regisztráció sikeres volt, itt kezeld a regisztrációt
        }
      },
      (reason) => {
        // A modal bezárásának okai (pl. Mégse gomb)
      }
    );
  }
}
