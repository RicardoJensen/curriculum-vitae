import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  animations: [
		trigger('imageAnimation',[
			transition(':enter', [
				style({ width: 0, opacity: 0 }),
				animate('290ms ease-in', style({ width: "*", opacity: 1 }))
			])
		])
	]
})

export class ImageSliderComponent implements OnInit {
  @Input() imageSliderImages: any;

  currentImage: number = 0;
  imageTimer!: NodeJS.Timeout;

  constructor() { }

  ngOnInit(): void {
    this.startImageTimer();
  }

  previusImage() {
    this.clearImageTimer();
    if (this.currentImage === 0) {
      this.currentImage = this.imageSliderImages.length - 1;
    } else {
      this.currentImage = this.currentImage - 1;
    }
  }

  nextImage() {
    this.clearImageTimer();
    if (this.currentImage + 1 === this.imageSliderImages.length) {
      this.currentImage = 0;
    } else {
      this.currentImage = this.currentImage + 1;
    }
  }

  startImageTimer() {
    this.imageTimer = setInterval(() => {
      this.nextImage();
    }, 10000);
  }

  clearImageTimer() {
    clearInterval(this.imageTimer);
    this.startImageTimer();
  }
}
