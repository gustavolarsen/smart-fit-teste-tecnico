import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ILocation, ISmartfitLocation } from '../interfacaces/smartfit-location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  apiUrl = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  constructor(private http: HttpClient) { }

  getAllLocations(): Observable<ILocation[]> {
    return this.http.get<ISmartfitLocation>(this.apiUrl).pipe(
      map((smartfitLocations: ISmartfitLocation) => smartfitLocations.locations)
    );
  }
}
