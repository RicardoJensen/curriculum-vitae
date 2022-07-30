import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode-button',
  templateUrl: './dark-mode-button.component.html',
  styleUrls: ['./dark-mode-button.component.scss']
})

export class DarkModeButtonComponent implements OnInit {

  darkMode: boolean = false;
  darkModeProperties: { [key: string]: string } = {
    "--white": "#161616",
    "--black": "#ffffff",
    "--blue": "#457eca",
    "--grey": "#d9d9d9",
    "--light-grey": "#5b5e66",
    "--bg-color": "#363636"
  };

  constructor() { }

  ngOnInit(): void {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.toggleDarkMode();
    }
  }
  
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (!this.darkMode) {
      this.removeAllProperties();
    } else {
      this.setAllProperties();
    }
  }

  setAllProperties() {
    for (const key in this.darkModeProperties) { 
      document.documentElement.style.setProperty(key, this.darkModeProperties[key]);
    }
  }

  removeAllProperties() {
    for (const key in this.darkModeProperties) { 
      document.documentElement.style.removeProperty(key);
    }
  }

}
