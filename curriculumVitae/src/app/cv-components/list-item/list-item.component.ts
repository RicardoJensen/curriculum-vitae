import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent implements OnInit {
  @Input() listItemText: string = "";
  @Input() listItemNoDot: boolean | undefined = false;
  @Input() listItemIsLink: boolean = false;
  @Input() listItemNoPadding: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
