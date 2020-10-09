import { TraysTicketsState } from './../data/state/trays-tickets.state';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

// models
import { TrayTicketI, TrayTicketModel } from './../models/tray-ticket.model';
// ngxs
import { Store, Select } from '@ngxs/store';
// Actions
import { AddTrayTicket } from 'src/app/data/actions/trays-tickets.actions';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public trayId: string;
  public trayName: string;
  public trayRoomNumber: string;
  public trayCheckpointName: string;

  @Select(TraysTicketsState.getTutorials) traysList$: Observable<TrayTicketI[]>;


  constructor(private store: Store) {
    this.traysList$.subscribe(el => console.log('el', el));
  }

  onSubmit(values: { trayId: string, trayName: string, trayRoomNumber: string, trayCheckpointName: string }) {
    console.log('values', values);
    const tyayPayload = new TrayTicketModel(values.trayId, values.trayName, values.trayCheckpointName, values.trayRoomNumber);
    this.addTrayTicket(tyayPayload);
  }


  addTrayTicket(payload: TrayTicketI) {
    this.store.dispatch( new AddTrayTicket(payload) );
  }

}
