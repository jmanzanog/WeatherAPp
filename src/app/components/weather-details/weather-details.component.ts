import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WeatherLocationService} from '../../services/weather-location.service';
import {WeatherLocation} from '../../models/weather-location';
import {Location} from '@angular/common';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  public id: string;
  private locations: WeatherLocation[];


  constructor(private locationService: Location, private route: ActivatedRoute, private weatherLocationService: WeatherLocationService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.refresh();
  }

  refresh() {
    console.log('[WeatherDetailsComponent] refresh()');
    this.weatherLocationService.findLocationById(this.id, (err, locations) => {
      if (err) {
        console.log('ERROR');
      } else {
        this.locations = locations;
      }
    });
  }

  back() {
    console.log('[SearchLocationComponent] back()');
    this.locationService.back();
  }

  ngOnInit() {

  }

}
