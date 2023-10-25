import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalContentComponent } from '../login-modal-content/login-modal-content.component';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private modalService: NgbModal) {}
  
  openLoginModal() {
    const modalRef = this.modalService.open(LoginModalContentComponent);
    modalRef.result.then(
      (result) => {
        if (result === 'Save click') {
          // A bejelentkezés sikeres volt, itt kezeld a bejelentkezést
        }
      },
      (reason) => {
        // A modal bezárásának okai (pl. Mégse gomb)
      }
    );
  }
  selectedCategory: string = ''; // Választott kategória

  onCategoryClick(category: string) {
    this.selectedCategory = category;
  }
}
