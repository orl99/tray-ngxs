import { TrayTicketI } from 'src/app/models/tray-ticket.model';

export class AddTrayTicket {
    static readonly type = '[TRAY] AddTrayTicket';
    constructor(public payload: TrayTicketI){}
}
