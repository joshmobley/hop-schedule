import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { EventComponent } from './event/event.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { DataService } from './data.service';
import { BioComponent } from './bio/bio.component';
import { VenueComponent } from './venue/venue.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MapComponent,
    EventComponent,
    HeaderComponent,
    FooterComponent,
    BioComponent,
    VenueComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7OwTcqqUgKhlgFJ8IMUQDPI4W3LpjYXk'
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'event/:id', component: EventComponent },
      { path: 'schedule/:id', component: ListComponent },
      { path: 'schedule', redirectTo: 'schedule/thursday' },
      { path: 'lineup/:slug', component: BioComponent },
      { path: 'venue/:slug', component: VenueComponent },
      { path: '', redirectTo: 'schedule/thursday', pathMatch: 'full' }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
