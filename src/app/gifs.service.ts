import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) { }

  private url = 'https://api.giphy.com/v1/gifs/search';
  private api_key = 'zLkJMyNXyiLEcTYI7LGwSva2wU28ARHY';
  private limit = '24';

  getGifs(q) {
    let url = `${this.url}?api_key=${this.api_key}&q=${q}&limit=${this.limit}`

    return this.http.get(url);
  }
}
