export interface WeatherLocation {
  id: number; // identificador único
  lat: number; // latitud
  lon: number; // longitud
  name: string; // nombre ciudad
  country: string; // país
  temp: string;
  tempmax: string;
  tempmin: string;
  humidity: string;
  pressure: string;
  wind: string;
  icon: string;
  clouds: string;

}
