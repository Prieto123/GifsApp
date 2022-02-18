import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGiftResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[]  = [];
  private _apiKey:    string    = "aM20r1tOtzNi6yvPf093pOJscUahn8D2";


  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }
  get apiKey() { return [ ...this._apiKey ]}

  constructor( private http: HttpClient ) {
    if(localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
    console.log(this._historial);
    
    if(this._historial[0] == undefined) {
      this.buscarGifs("sexo")
    } else {
      this.buscarGifs(this._historial[0])
    }

  }

  



  buscarGifs ( query: string ) {
    query = query.toLowerCase();
    if (this._historial.includes(query)) {
      const index: number = this._historial.indexOf(query)
      this._historial.splice(index, 1)
      
      this._historial.unshift( query );
      localStorage.setItem('historial', JSON.stringify( this._historial ));
    } else {
      this._historial.unshift( query );
      localStorage.setItem('historial', JSON.stringify( this._historial ));
    }

    this.http.get<SearchGiftResponse>(`http://api.giphy.com/v1/gifs/search?api_key=aM20r1tOtzNi6yvPf093pOJscUahn8D2&q=${query}`)
      .subscribe( (resp) => {
        this.resultados = resp.data
        console.log(this._historial);
        
      } 
    );

  }



}
