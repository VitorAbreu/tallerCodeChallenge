import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  private http = inject(HttpClient);

  getData() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(take(1));
  }
}
