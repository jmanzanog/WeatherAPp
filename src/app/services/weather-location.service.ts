import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeatherLocation} from '../models/weather-location';

@Injectable()
export class WeatherLocationService {
  private key = '7ae328a03ad33078d2dfd72683afb48d';
  private url = `http://api.openweathermap.org/data/2.5/weather`;

  constructor(private http: HttpClient) {
  }

  findLocation(desc: string, cb: (err: Error, locations: WeatherLocation[]) => void): void {
    console.log(`[WeatherLocationService] findLocation(${desc}`);
    this.http.get<any>(this.url, {
      params: {APPID: this.key, q: desc, units: 'metric'}
    }).subscribe((info) => {
      console.log('[WeatherLocationService] findLocation() success.');
      if (info) {
        console.log('INFO: ' + info )
        cb(null, [{
          id: info.id,
          lat: info.coord.lat,
          lon: info.coord.lon,
          name: info.name,
          country: info.sys.country,
          temp: info.main.temp,
          tempmax: info.main.temp_max,
          tempmin: info.main.temp_min,
          humidity: info.main.humidity,
          pressure: info.main.pressure,
          wind: info.wind.speed,
          icon: info.weather[0].icon,
          clouds: info.clouds.all
        }]);
      } else {
        cb(null, []);
      }
    }, (err) => {
      console.log(err);
      cb(err, null);
    });
  }

  findLocationById(id: string, cb: (err: Error, locations: WeatherLocation[]) => void): void {
    console.log(`[WeatherLocationService] findLocation(${id}`);
    this.http.get<any>(this.url, {
      params: { id, APPID: this.key, units: 'metric'}
    }).subscribe((info) => {
      console.log('[WeatherLocationService] findLocation() success.');
      if (info) {
        cb(null, [{
          id: info.id,
          lat: info.coord.lat,
          lon: info.coord.lon,
          name: info.name,
          country: info.sys.country,
          temp: info.main.temp,
          tempmax: info.main.temp_max,
          tempmin: info.main.temp_min,
          humidity: info.main.humidity,
          pressure: info.main.pressure,
          wind: info.wind.speed,
          icon: info.weather[0].icon,
          clouds: info.clouds.all
        }]);
      } else {
        cb(null, []);
      }
    }, (err) => {
      console.log(err);
      cb(err, null);
    });
  }
}

