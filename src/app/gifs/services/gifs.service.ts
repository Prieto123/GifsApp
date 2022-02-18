import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[]  = [];
  private _apiKey:    string    = "aM20r1tOtzNi6yvPf093pOJscUahn8D2";


  public resultados: any[] = [];

  get historial() {
    return [...this._historial];
  }
  get apiKey() { return [ ...this._apiKey ]}

  constructor( private http: HttpClient ) {}



  buscarGifs ( query: string ) {
    query = query.toLowerCase();
    if (this._historial.includes(query)) {
      const index: number = this._historial.indexOf(query)
      this._historial.splice(index, 1)
      
      this._historial.unshift( query );
    } else {
      this._historial.unshift( query );
    }

    this.http.get(`http://api.giphy.com/v1/gifs/search?api_key=aM20r1tOtzNi6yvPf093pOJscUahn8D2&q=${query}`)
      .subscribe( (resp: any) => {
        this.resultados = resp.data
        console.log(resp.data);
        
      } 
    );

  }



}
