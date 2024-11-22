import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UrlEnviromentService } from 'src/app/shared/services/url-enviroment.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpClient: HttpClient, private envUrl: UrlEnviromentService) { }

  // getClients() {
  //   return this.httpClient.get<any>(this.envUrl.urlAddress + 'utils/list/all-clients/');
  // }

  getClients() {
    const apiUrl = this.envUrl.urlAddress + 'utils/list/all-clients/';
    console.log('URL construida para la solicitud:', apiUrl);  // Verifica que la URL es correcta
    return this.httpClient.get<any>(apiUrl);
  }

  

}
