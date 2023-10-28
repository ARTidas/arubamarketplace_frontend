import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AmbotService } from '../ambot.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  answer: any;
  apiData: any;
  index = 0;
  typingText = '';

  private typingInterval: any;

  constructor(
    private route: ActivatedRoute,
    private ambotService: AmbotService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadTextForId(id);
    });
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  loadTextForId(id: number) {
    this.ambotService.getAnswersById(id).subscribe((data) => {
      this.apiData = data;
      this.startTyping();
    });
  }

  startTyping() {
    const textToType = this.apiData.textInput; // A textInput tartalma

    this.typingInterval = setInterval(() => {
      if (this.index < textToType.length) {
        this.typingText += textToType.charAt(this.index);
        this.index++;
      } else {
        clearInterval(this.typingInterval);
      }
    }, 50); // Beállíthatod a gépelés sebességét itt
  }
}
