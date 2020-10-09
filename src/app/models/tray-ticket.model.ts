export interface TrayTicketI {
    id: string;
    name: string;
    trayCheckpointName: string;
    roomNumber: string;
}
export class TrayTicketModel {
    id: string;
    name: string;
    trayCheckpointName: string;
    roomNumber: string;
    constructor(id: string, name: string, trayCheckpointName: string, roomNumber: string) {
        this.id = id;
        this.name = name;
        this.trayCheckpointName = trayCheckpointName;
        this.roomNumber = roomNumber;
    }
}
