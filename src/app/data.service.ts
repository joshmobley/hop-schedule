import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  url = 'http://hopscotchdesignfest.com/wp-json/wp/v2/';

  getEvents() {
    return this.http.get(this.url + 'schedule').map(
      res => res.json()
    );
  }

  getEvent(slug: string) {
    return this.http.get(this.url + 'schedule?slug=' + slug).map(
      res => res.json()
    );
  }

}
