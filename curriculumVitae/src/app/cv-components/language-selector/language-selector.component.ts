import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements AfterViewInit {
  @ViewChild('languageSelector') e!: ElementRef;
  @Input() languageSelectorLabel: string = "";
  @Output() languageSelectorLanguage: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngAfterViewInit(): void {
    const el = this.e.nativeElement;
    switch (this.languageSelectorLabel) {
      case "Idioma:":
        el.value = "pt-BR";
        break;
      case "Language:":
        el.value = "en-US";
        break;
      default:
        el.value = "en-US";
    }

  }

  updateSelect(languageSelected: Event) {
    this.languageSelectorLanguage.emit((languageSelected.target as HTMLSelectElement).value);
  }
}
