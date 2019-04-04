import {Injectable} from '@angular/core';
import {WeatherLocation} from '../models/weather-location';


@Injectable()
export class WeatherLocationService {

  constructor() {
  }

  findLocation(desc: string, cb: (err: Error, locations: WeatherLocation[]) => void): void {
    console.log(`[WeatherLocationService] findLocation(${desc}`);
    const location = {
      id: 100,
      lat: 38.71,
      lon: -0.47,
      name: 'Alcoy',
      country: 'ES'
    };
    cb(null, [location]);
  }
}

