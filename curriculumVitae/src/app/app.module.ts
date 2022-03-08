import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { SectionTitleComponent } from './cv-components/section-title/section-title.component';
import { SectionSubtitleComponent } from './cv-components/section-subtitle/section-subtitle.component';
import { ImageSliderComponent } from './cv-components/image-slider/image-slider.component';
import { FooterComponent } from './cv-components/footer/footer.component';
import { ListItemComponent } from './cv-components/list-item/list-item.component';
import { CheckboxComponent } from './cv-components/checkbox/checkbox.component';
import { LanguageSelectorComponent } from './cv-components/language-selector/language-selector.component';
import { DarkModeButtonComponent } from './cv-components/dark-mode-button/dark-mode-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CurriculumVitaeComponent,
    SectionTitleComponent,
    SectionSubtitleComponent,
    ImageSliderComponent,
    FooterComponent,
    ListItemComponent,
    CheckboxComponent,
    LanguageSelectorComponent,
    DarkModeButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
