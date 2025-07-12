import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Table } from '../models/table.interface';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  getTableData(): Observable<Table | any>{
    return of(
       {
        header: [
          { name: 'Vehicle', sortName: 'vehicle' },
          { name: 'Plate Num.', sortName: 'plateNumber' },
          { name: 'Odometer ', sortName: '' },
          { name: 'GPS ', sortName: '' },
          { name: 'Device ', sortName: '' },
          { name: 'SIM ', sortName: '' },
          { name: 'Fleet ', sortName: '' },
          { name: 'Status ', sortName: '' },
        ],
        data: [
          {
            vehicle: 'aBus-9265',
            plateNumber: '04321',
            odometer: '55,956 KM',
            gps: '3-Nov-2024',
            device: 'Teltonika\nC03-96321',
            sim: 'Allowance\n1.5GB',
            fleet: 'Q22',
            status: 'Active',
          },
          {
            vehicle: 'cBus-9265',
            plateNumber: '04321',
            odometer: '55,956 KM',
            gps: '3-Nov-2024',
            device: 'Teltonika\nC03-96321',
            sim: 'Allowance\n1.5GB',
            fleet: 'Q22',
            status: 'Active',
          },
          {
            vehicle: 'eBus-9265',
            plateNumber: '04321',
            odometer: '55,956 KM',
            gps: '3-Nov-2024',
            device: 'Teltonika\nC03-96321',
            sim: 'Allowance\n1.5GB',
            fleet: 'Q22',
            status: 'Active',
          },
          {
            vehicle: 'fBus-9265',
            plateNumber: '04321',
            odometer: '55,956 KM',
            gps: '3-Nov-2024',
            device: 'Teltonika\nC03-96321',
            sim: 'Allowance\n1.5GB',
            fleet: 'Q22',
            status: 'Active',
          },
          {
            vehicle: 'dBus-9265',
            plateNumber: '04321',
            odometer: '55,956 KM',
            gps: '3-Nov-2024',
            device: 'Teltonika\nC03-96321',
            sim: 'Allowance\n1.5GB',
            fleet: 'Q22',
            status: 'Active',
          },
          {
            vehicle: 'qBus-9265',
            plateNumber: '04321',
            odometer: '55,956 KM',
            gps: '3-Nov-2024',
            device: 'Teltonika\nC03-96321',
            sim: 'Allowance\n1.5GB',
            fleet: 'Q22',
            status: 'Active',
          },
          {
            vehicle: 'vBus-9265',
            plateNumber: '04321',
            odometer: '55,956 KM',
            gps: '3-Nov-2024',
            device: 'Teltonika\nC03-96321',
            sim: 'Allowance\n1.5GB',
            fleet: 'Q22',
            status: 'Active',
          },
          {
            vehicle: 'fBus-9265',
            plateNumber: '04321',
            odometer: '55,956 KM',
            gps: '3-Nov-2024',
            device: 'Teltonika\nC03-96321',
            sim: 'Allowance\n1.5GB',
            fleet: 'Q22',
            status: 'Active',
          },
          {
            vehicle: 'jBus-9265',
            plateNumber: '04321',
            odometer: '55,956 KM',
            gps: '3-Nov-2024',
            device: 'Teltonika\nC03-96321',
            sim: 'Allowance\n1.5GB',
            fleet: 'Q22',
            status: 'Active',
          },
          {
            vehicle: 'eeqBus-9265',
            plateNumber: '04321',
            odometer: '55,956 KM',
            gps: '3-Nov-2024',
            device: 'Teltonika\nC03-96321',
            sim: 'Allowance\n1.5GB',
            fleet: 'Q22',
            status: 'Active',
          },
          {
            vehicle: 'aaBus-9265',
            plateNumber: '04321',
            odometer: '55,956 KM',
            gps: '3-Nov-2024',
            device: 'Teltonika\nC03-96321',
            sim: 'Allowance\n1.5GB',
            fleet: 'Q22',
            status: 'Active',
          },
        ],
      }
    )
  }
  
}
