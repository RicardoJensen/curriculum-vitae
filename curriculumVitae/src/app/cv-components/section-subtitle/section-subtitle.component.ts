import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-subtitle',
  templateUrl: './section-subtitle.component.html',
  styleUrls: ['./section-subtitle.component.scss']
})

export class SectionSubtitleComponent implements OnInit {
  @Input() sectionSubtitleText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
