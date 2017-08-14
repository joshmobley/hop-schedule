import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  events: Object;

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) { }

  fetchData() {
    this.dataService.getEvents('thursday').subscribe(
      res => {
        this.activatedRoute.params.subscribe(
          params => {
            let eventsArr = [];
            res.forEach( (item) => {
              if( item.acf.day.value == params.id ) {
                eventsArr.push(item);
              }
            });
            this.events = eventsArr;

          }
        )

      }
    );
  }

  formatTime(t) {
    // Check correct time format and split into components
    let time = t.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [t];

    if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'am' : 'pm'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }

    return time[0] + time[1] + time[2];
    //return time.join(''); // return adjusted time or original string
  }

  chooseDay() {
    let params;
    this.activatedRoute.params.subscribe(
      res => params = res
    );

    if( params.length == 0 ) {
      this.router.navigate(['/thursday']);
    }

  }

  newTime(i) {
    if( this.events[i-1] ) {
      return this.events[i].acf.start_time != this.events[i-1].acf.start_time;
    }
  }

  setColor(i) {
    if (i % 3 == 0) return '#3C1C5B';
    if (i % 2 == 0) return '#00BFFF';
  }

  ngOnInit() {
    this.chooseDay();
    this.fetchData();
  }

}
