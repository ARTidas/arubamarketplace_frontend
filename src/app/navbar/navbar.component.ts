import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalContentComponent } from '../login-modal-content/login-modal-content.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery: string = '';
  searchResults: string[] = []; // Most már a típus string[]

  showResults: boolean = false;

  constructor(private modalService: NgbModal, private productService: ProductsService) {}

  onSearch() {
    if (this.searchQuery.length > 0) {
      this.productService.getProductByName(this.searchQuery).subscribe(
        (result) => {
          console.log(result);
          this.searchResults = [result]; // Most minden találat külön objektumként van a tömbben
          this.showResults = true;
        },
        (error) => {
          console.error('Hiba történt a keresés során:', error);
          this.searchResults = [];
          this.showResults = false;
        }
      );
    } else {
      this.searchResults = [];
      this.showResults = false;
    }
  }
  

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
}
