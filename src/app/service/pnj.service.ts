import { RandomPnj } from './../modele/RandomPnj';
import { UpdatePnj } from './../modele/UpdatePnj';
import { Menu } from './../modele/Menu';
import { Pnj } from './../modele/Pnj';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PnjService {

  BASE_API_URL = 'http://localhost:8080/pnj/';

  option = {
    headers: {
      Authorization: 'Basic ' + btoa('user:root'),
      ContentType: 'application/json'
    }
  }

  constructor(
    private httpClient: HttpClient
  ){}

  getAllPnj(): Observable<Array<Pnj>>{

    return <Observable<Array<Pnj>>>this.httpClient.get(this.BASE_API_URL, this.option);
  }

  getOnePnj(id:Number): Observable<Pnj>{
    return <Observable<Pnj>>this.httpClient.get(this.BASE_API_URL + id, this.option)
  }

  getMenuArchetype(): Observable<Array<Menu>>{
    return <Observable<Array<Menu>>>this.httpClient.get(this.BASE_API_URL + 'archetype', this.option);
  }

  getMenuRace(): Observable<Array<Menu>>{
    return <Observable<Array<Menu>>>this.httpClient.get(this.BASE_API_URL + 'race', this.option);
  }

  getMenuForces(): Observable<Array<Menu>>{
    return <Observable<Array<Menu>>>this.httpClient.get(this.BASE_API_URL + 'forces', this.option);
  }

  getMenuFaiblesse(): Observable<Array<Menu>>{
    return <Observable<Array<Menu>>>this.httpClient.get(this.BASE_API_URL + 'faiblesse', this.option);
  }

  deletePnj(id:Number): Observable<Pnj>{
    return <Observable<Pnj>>this.httpClient.delete(this.BASE_API_URL + id, this.option)
  }

  updatePnj(updatePnj:UpdatePnj): Observable<Object>{
    return this.httpClient.put(this.BASE_API_URL, updatePnj, this.option)
  }

  addPnj(randomPnj:RandomPnj): Observable<Object>{
    return this.httpClient.post(this.BASE_API_URL, randomPnj, this.option)
  }

}
