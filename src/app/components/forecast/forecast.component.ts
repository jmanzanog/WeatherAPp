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
  private dates: string [];

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

  getDays(): string [] {
    let listDates: string[] = [];
   /* this.listWeatherInfo.forEach(function (value) {
      if (listDates.length == 0) {
        listDates.push(value.ts.substr(0, 9));
      } else {
        if (!listDates.includes(value.ts.substr(0, 9))) {
          listDates.push(value.ts.substr(0, 9));
        }
      }
    });*/

    for (let value of this.listWeatherInfo) {
      //console.log(value.ts);
      if (listDates.length == 0) {
        listDates.push(value.ts.substr(0, 9));
      } else {
        if (!listDates.includes(value.ts.substr(0, 9))) {
          listDates.push(value.ts.substr(0, 9));
        }
      }
    }
    return listDates;
  }

  process() {
    console.log('process!!!!!!!!!!!!!');
    this.dates.forEach(function (value) {
     // console.log(value);
    });
  }

// Epoch Unix Time Stamp https://www.epochconverter.com/
  ngOnInit() {

  }

}
