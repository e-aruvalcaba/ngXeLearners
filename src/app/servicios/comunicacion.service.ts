import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUsuario } from '../modelos/usuario.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  private urlapi = 'http://localhost:8081';

  constructor(private _http: HttpClient) { }

  private authOptions(): any {
    return {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'true',
        'Accept': '*/*',
        // 'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en, es',
        // 'Access-Control-Request-Headers': 'content-type',
        // 'Access-Control-Request-Method': 'POST',
        // 'Connection': 'keep - alive',
        // 'Host': 'hp-probook',
        // 'Origin': 'http://localhost:4200',
        // 'Referer': 'http://localhost:4200/',
        // 'User-Agent': 'Mozilla / 5.0(X11; Linux x86_64) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 59.0.3071.109 Safari / 537.36'
      }) // end headers
    }; // end options
  } // end authOptions

  insertarUsuario(usuario: IUsuario): any {
    console.log("Dentro del metodo del servicio")

    try {
      this._http.post<IUsuario>(`${this.urlapi}/event`, usuario).subscribe((resp) => {
        console.log(`Respuesta ${resp}`)
      });
    } catch (error) {
      console.error(error);
    }
  }

  getAll():any {//Observable<IUsuario[]> {
    this._http.get<IUsuario[]>(`${this.urlapi}/event`).subscribe((resp) => {
      console.log(resp);
    });
  }

  // postMaterial(material: Material) {
  //   return this._http.post<Material>('http://40.76.70.76:80/TrainTracking/api/Materials/', material);
  // }

  // updateMaterial(material: Material, id: number): Observable<void> {
  //   return this._http.put<void>('http://40.76.70.76:80/TrainTracking/api/Materials/' + id, material);
  // }
  // deleteMaterial(id) {
  //   return this._http.delete('http://40.76.70.76:80/TrainTracking/api/Materials/' + id);
  // }

  // //Train
  // getAllTrain(): Observable<Train[]> {
  //   //return this._http.get<Train[]>('http://localhost:53358/api/Train');
  //   return this._http.get<Train[]>('http://40.76.70.76:80/TrainTracking/api/Train');
  // }

}
