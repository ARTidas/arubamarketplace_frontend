import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AmbotService } from '../ambot.service';
import { ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})

export class HelloComponent implements OnInit {
  @ViewChild('typingText', { static: true }) typingTextElement!: ElementRef;

  answer: any;
  apiData: any;
  index = 0;
  typingText = '';
  decisions: any[] = []; // Létrehozunk egy tömböt a decisions-nek

  private typingInterval: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ambotService: AmbotService,
  ) {}

  ngOnInit(): void {
    this.typingTextElement = new ElementRef(null);
    

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
  clearTypingText(newTextInput: string) {
    this.typingText = newTextInput;
  }
  

  loadNextNode(childrenId: number) {
    this.router.navigate(['hello', childrenId]);
  
    // Az előző oldal adatainak ürítése
    this.apiData = null;
    this.decisions = [];
  
    // Töröld a typingText tartalmát és állítsd be az új textInput értékét
    const newTextInput = this.apiData.textInput;
  
    // Töröld a typingText tartalmát
    this.clearTypingText(newTextInput);
  
    // Töltsd be az új adatokat
    this.loadTextForId(childrenId);
  }
  

  loadTextForId(id: number) {
    this.ambotService.getAnswersById(id).subscribe((data) => {
      this.apiData = data;
      this.decisions = this.apiData.decisions; // decisions tömb betöltése
      this.startTyping(this.apiData.textInput);
    });
  }

  startTyping(textToType: string, callback?: () => void) {
    this.typingText = ''; // Töröld a meglévő typingText-et
    this.index = 0;
    const typingInterval = setInterval(() => {
      if (this.index < textToType.length) {
        this.typingText += textToType.charAt(this.index);
        this.index++;
      } else {
        clearInterval(typingInterval);
        if (callback) {
          callback(); // Hívjuk meg a callback függvényt a befejezés után
        }
        // Az időzítés befejezése után állítsd be az új textInput értékét
        this.clearTypingText(this.apiData.textInput);
      }
    }, 50);
  }
  
  
  
  
  
}
