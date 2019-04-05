import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {WeatherLocationService} from '../../services/weather-location.service';
import {WeatherInfo} from '../../models/weather-info';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  public id: string;
  private listWeatherInfo: WeatherInfo[];

  constructor(private locationService: Location, private route: ActivatedRoute, private weatherLocationService: WeatherLocationService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.refresh();
  }

  back() {
    console.log('[SearchLocationComponent] back()');
    this.locationService.back();
  }
  refresh() {
    console.log('[ForecastComponent] refresh()');
    this.weatherLocationService.findForestCastById(this.id, (err, locations) => {
      if (err) {
        console.log('ERROR');
      } else {
        this.listWeatherInfo = locations;
      }
    });
  }

// Epoch Unix Time Stamp https://www.epochconverter.com/
  ngOnInit() {
  }

}
