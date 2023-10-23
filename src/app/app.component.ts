import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hackaton';

  observable = new Observable<string>(observer => {
    observer.next('Start Processing...');
    setTimeout(() => observer.next('Still Processing...'), 3000);
    setTimeout(() => observer.complete(), 5000);
  });

  

  ngOnInit() {
    this.observable.subscribe({
      next: data => console.log(data),
      error: error => console.error(error),
      complete: () => console.log('Process Completed!'),
    });
    console.log('COMPONENT INITIALIZED')


  }
}