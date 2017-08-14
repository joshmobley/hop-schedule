import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  url = 'http://hopscotchdesignfest.com/wp-json/wp/v2/';

  getEvents(day) {
    return this.http.get(this.url + 'schedule?per_page=100&a').map(
      res => {
        let list = res.json();
        let object = [];

        list.forEach( (item) => {
        /*  if( item.acf.day.value == 'thursday' ) {
            object.thurs.push(item);
          } else {
            object.fri.push(item);
          }*/
          object.push(item);
        });

        function buildArray(obj) {
          let arr = [];
          obj.forEach( (item, index) => {
            let day = item.acf.day.value;
            let splitTime = item.acf.start_time.split(':');
            let hrs = splitTime[0];
            let min = splitTime[1];
            let sec = splitTime[2];
            arr.push([index, day, hrs, min]);
          });
          return arr;
        }


        let arr = buildArray(object).sort((a,b) => {
          if( a[1] < b[1] ) return 1;
          if( a[1] > b[1] ) return -1;
          if( a[2] < b[2] ) return -1;
          if( a[2] > b[2] ) return 1;
          if( a[3] < b[3] ) return -1;
          if( a[3] > b[3] ) return 1;
        });


        //.sort(sortTime(3)).sort(sortTime(2));
        //let friArr = buildArray(object.fri).sort(sortTime(2)).sort(sortTime(1));
        console.log(arr);

        let eventArr = [];

        arr.forEach( (item) => {
          eventArr.push(res.json()[item[0]]);
        });

        //console.log(eventArr);
        return eventArr;
      }
    );
  }

  getEvent(slug: string) {
    return this.http.get(this.url + 'schedule?slug=' + slug).map(
      res => res.json()
    );
  }

  getVenue(slug: string) {
    return this.http.get(this.url + 'venues?slug=' + slug).map(
      res => res.json()
    );
  }

  getLineup(slug: string) {
    return this.http.get(this.url + 'lineup?slug=' + slug).map(
      res => res.json()
    );
  }

  getRelatedEvents(time: string) {
    return this.http.get(this.url + 'schedule?slug=' + time).map(
      res => res.json()
    );
  }

}
