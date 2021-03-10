import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TrayTicketI } from 'src/app/models/tray-ticket.model';

// Actions
import { AddTrayTicket } from 'src/app/data/actions/trays-tickets.actions';

export class TraysTicketsStateModel {
    TrayTickets: TrayTicketI[];
}

@State<TraysTicketsStateModel>({
    name: 'TraysTicketsState',
    defaults: {
        TrayTickets: [],
    },
})
export class TraysTicketsState {
    constructor() {
        
    }
    // Get an observable of Trays
    @Selector()
    static getTrays(state: TraysTicketsStateModel) {
        return state.TrayTickets;
    }

    @Action(AddTrayTicket)
    add({getState, patchState, setState,  }: StateContext<TraysTicketsStateModel>, { payload }: AddTrayTicket) {
        const state = getState();
        console.log('state', state);
        // https
        patchState({
            TrayTickets: [...state.TrayTickets, payload]
        });
    }

}
