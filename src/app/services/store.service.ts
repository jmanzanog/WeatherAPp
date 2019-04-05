import {Injectable} from '@angular/core';
import {WeatherLocation} from '../models/weather-location';

@Injectable()
export class StoreService {
  private locations: WeatherLocation[] = [];

  constructor() {
    /*this.locations.push({
      id: 2522098,
      lat: 38.71,
      lon: -0.47,
      name: 'Alcoy',
      country: 'ES',
      temp: '',
      tempmax: '',
      tempmin: '',
      humidity: '',
      pressure: '',
      wind: '',
      icon: '',
      clouds: '',
    });*/
  }

  addLocation(location: WeatherLocation): void {
    console.log(`[StoreService] addLocation(${location.name}`);
    this.locations.push(location);
  }

  removeLocation(id: number): void {
    console.log(`[StoreService] removeLocation(${id})`);
    const index = this.locations.findIndex(location => location.id === id);
    if (index !== -1) {
      this.locations.splice(index, 1);
    }
  }

  listLocations(): WeatherLocation[] {
    console.log(`[StoreService] listLocation()`);
    return this.locations;
  }

  findLocation(id: number): WeatherLocation {
    console.log(`[StoreService] findLocation(${id})`);
    const index = this.locations.findIndex(location => location.id === id);
    if (index !== -1) {
      return this.locations[index];
    } else {
      return null;
    }
  }
}
