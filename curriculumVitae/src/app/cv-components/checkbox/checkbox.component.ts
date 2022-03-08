import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent implements OnInit {
  @Input() checkboxLabel: string = "";
  @Input() checkboxInput: boolean = false;
  @Output() checkboxInputChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  changeValue() {
    this.checkboxInput = !(this.checkboxInput);
    this.checkboxInputChange.emit(this.checkboxInput);
  }

}
