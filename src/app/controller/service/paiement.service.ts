import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Paiement} from "../model/paiement.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  private _paiement!: Paiement;
  private _paiements!: Array<Paiement>;
  private _url = "http://localhost:8033/GestionCommertiale/Paiement/";


  constructor(private _http:HttpClient) { }

  public findAll():Observable<Array<Paiement>>{
    return this._http.get<Array<Paiement>>(this.url);
  }
  public save(paiement: Paiement):Observable<Paiement>{
    return this._http.post<Paiement>(this.url , this.paiement);
  }
  public  deleteByReference(code: string): Observable<number>{
    return this._http.delete<number>(this.url+'code/'+code);
  }

  get paiement(): Paiement {
    if (this._paiement == null){
      this._paiement = new Paiement();
    }
    return this._paiement;
  }

  set paiement(value: Paiement) {
    this._paiement = value;
  }

  get paiements(): Array<Paiement> {
    if (this._paiements == null){
      this._paiements = new Array<Paiement>();
    }
    return this._paiements;
  }

  set paiements(value: Array<Paiement>) {
    this._paiements = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

}
