import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(protected httpClient: HttpClient) { }
  
  fetch(search: String): Observable<any> {
    const keywords = search.replace(' ', '+');
    const query =  keywords + '+in:name,description,readme';
    return this.httpClient
      .get<any[]>( 'https://api.github.com/search/repositories?q=' + query);
  }
}
