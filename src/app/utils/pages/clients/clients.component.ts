import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.listClients();
  }

  listClients() {
    this.clientsService.getClients().subscribe(resp => {
      console.log('Respuesta completa: ', resp);  // Muestra toda la respuesta
      if (resp.success) {
        this.clients = resp.data;
        console.log("Clientes: ", this.clients);  // Asegúrate de que 'clients' no sea undefined
      }
    }, error => {
      if (error.status === 400) {
        console.log("Error en la solicitud");
      }
    });
  }
}
