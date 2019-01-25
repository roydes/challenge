import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = 'https://api.github.com/search/repositories?q=';
  constructor(protected httpClient: HttpClient) { }

  fetchAll(search: string): Observable<any> {
    const keywords = search.replace(' ', '+');
    const query =  keywords + '+in:name,description,readme';
    return this.httpClient.get<any[]>( this.url + query);
  }
  fetchComments(commentsUrl: string): Observable<any> {
    const url = commentsUrl.replace('{/number}', '');
    return this.httpClient.get<any[]>(url);
  }
}
