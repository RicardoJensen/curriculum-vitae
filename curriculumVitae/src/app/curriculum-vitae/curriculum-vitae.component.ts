import { Component, OnInit } from '@angular/core';
import * as DATA from '../data'
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss'],
  animations: [
		trigger('opacityAnimation',[
			transition(':enter', [
				style({ opacity: 0.5 }),
				animate('400ms ease-in', style({ opacity: 1 }))
			])
		])
	]
})

export class CurriculumVitaeComponent implements OnInit {

  curriculum = DATA.ENGLISH_CURRICULUM;
  contacts = DATA.ENGLISH_CONTACTS;
  optionsText = DATA.ENGLISH_OPTIONS;
  images = DATA.IMAGES;
  summedUp: boolean = true;
  

  constructor() { }

  ngOnInit(): void {
    this.updateLanguage(window.navigator.language);
  }

  updateLanguage(language: string) {
    switch (language) {
      case "pt-BR":
        this.curriculum = DATA.PORTUGESE_CURRICULUM;
        this.contacts = DATA.PORTUGESE_CONTACTS;
        this.optionsText = DATA.PORTUGESE_OPTIONS;
        break;
      case "en-US":
        this.curriculum = DATA.ENGLISH_CURRICULUM;
        this.contacts = DATA.ENGLISH_CONTACTS;
        this.optionsText = DATA.ENGLISH_OPTIONS;
        break;
      default:
        this.curriculum = DATA.ENGLISH_CURRICULUM;
        this.contacts = DATA.ENGLISH_CONTACTS;
        this.optionsText = DATA.ENGLISH_OPTIONS;
    }
  }
}