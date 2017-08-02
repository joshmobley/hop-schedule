import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  slug: string;
  events: object;

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
            console.log(this.events);
          }
        );
      }
    );
  }

  ngOnInit() {
    this.getEvent();
  }

}
