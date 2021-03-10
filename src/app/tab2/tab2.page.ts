import { TrayTicketI } from './../models/tray-ticket.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TraysTicketsState } from 'src/app/data/state/trays-tickets.state';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @Select(TraysTicketsState.getTrays) traysList$: Observable<TrayTicketI[]>;

  constructor() {}

}
