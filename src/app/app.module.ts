import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {WeatherLocationService} from './services/weather-location.service';
import {StoreService} from './services/store.service';
import {WeatherInfoService} from './services/weather-info.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SearchLocationComponent} from './components/search-location/search-location.component';
import {WeatherDetailsComponent} from './components/weather-details/weather-details.component';
import {ForecastComponent} from './components/forecast/forecast.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {WeatherCardComponent} from './components/weather-card/weather-card.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchLocationComponent,
    WeatherDetailsComponent,
    ForecastComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: DashboardComponent},
      {path: 'search', component: SearchLocationComponent},
      {path: 'details/:id', component: WeatherDetailsComponent},
      {path: 'forecast/:id', component: ForecastComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatListModule
  ],
  providers: [WeatherInfoService, WeatherLocationService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
