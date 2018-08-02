import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  equipo: InfoEquipo [] = [];
  cargada = false;
  constructor(private http: HttpClient) {
    console.log('info pagina cargada');
    this.infoPagina();
    this.infoAbout();
   }

   private infoPagina() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( resp => {
      this.cargada = true;
      this.info = resp;
    });
   }

   private infoAbout() {
    this.http.get('https://angular-html-d914b.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {
      this.cargada = true;
      this.equipo = resp;
    });
   }
}
