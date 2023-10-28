import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalContentComponent } from '../login-modal-content/login-modal-content.component';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  searchQuery: string = '';
  searchResults: string[] = [];
  showResults: boolean = false;

  constructor(private modalService: NgbModal) {}
  
  onSearch() {
    // Ide helyezd be a keresési logikát
    // Példa: egy szimulált keresés
    this.searchResults = this.performSearch(this.searchQuery);
    this.showResults = this.searchQuery.length > 0;
  }

  performSearch(query: string): string[] {
    // Itt lehet egy valós keresési logikát implementálni
    // Példa: visszaadjuk a beírt szövegeket, de itt lehet API hívást is használni
    return ['Találat 1', 'Találat 2', 'Találat 3'];
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
  selectedCategory: string = ''; // Választott kategória

  onCategoryClick(category: string) {
    this.selectedCategory = category;
  }
}
