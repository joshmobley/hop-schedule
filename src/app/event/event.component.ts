import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  slug: string;
  events: object;
  venue: object;
  lineup = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  getEvent() {
    this.activatedRoute.params.subscribe(
      res => {
        this.slug = res.id;
        this.dataService.getEvent(this.slug).subscribe(
          res => {
            this.events = res;
            if(this.events[0]['acf'].lineup != false){
              this.events[0]['acf'].lineup.forEach( (item) => {
                this.getLineup(item.person.post_name);
              });
            }else{
              this.lineup = null;
            }
            this.getVenue();
          }
        );
      }
    );
  }

  getVenue() {
    this.dataService.getVenue(this.events[0]['acf'].venue.post_name).subscribe(
      res => {
        this.venue = res;
      }
    )
  }

  getLineup(slug: string) {
    this.dataService.getLineup(slug).subscribe(
      res => {
        this.lineup.push(res[0]);
      }
    )
  }

  truncate(string, char) {
    let newString = '';
    string.split(' ');
    for(let i = 0; i < 80; i++) {
      newString = newString + ' ' + string[i];
    }
    return newString + '...';
  }

  ngOnInit() {
    this.getEvent();
  }

}
