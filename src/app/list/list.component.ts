import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  events: Object;

  constructor(private dataService: DataService) { }

  fetchData() {
    this.dataService.getEvents().subscribe(
      res => {
        this.events = res;
        console.log(res);
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
    return time.join(''); // return adjusted time or original string
  }

  ngOnInit() {
    this.fetchData();
  }

}
