import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  lineup: object;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  getData(slug) {
    this.dataService.getLineup(slug).subscribe(
      res => {
        this.lineup = res;
        console.log(this.lineup);
      }
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      res => this.getData(res.slug)
    )
  }

}
