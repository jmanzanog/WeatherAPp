import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {WeatherLocationService} from '../../services/weather-location.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor(private locationService: Location, private route: ActivatedRoute, private weatherLocationService: WeatherLocationService) {
  }
// Epoch Unix Time Stamp https://www.epochconverter.com/
  ngOnInit() {
  }

}
