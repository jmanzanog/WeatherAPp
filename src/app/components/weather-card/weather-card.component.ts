import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WeatherLocation} from '../../models/weather-location';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() private location: WeatherLocation;
  @Output() private removed = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
}
