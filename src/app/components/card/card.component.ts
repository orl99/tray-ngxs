import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() roomNumber: number;
  @Input() ticketNumber: string;
  @Input() ticketName: string;
  @Input() trayCheckpointName: string;

  constructor() { }

  ngOnInit() {}

}
