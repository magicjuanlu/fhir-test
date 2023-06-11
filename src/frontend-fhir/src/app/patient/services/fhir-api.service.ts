import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bundle } from 'fhir/r4';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FHIRApiService {
  private fhirServerUrl = 'http://hapi.fhir.org/baseR4/';
  constructor(private http: HttpClient) {}

  getBundle(): Observable<Bundle> {
    return this.http.get<Bundle>(`${this.fhirServerUrl}Patient`);
  }
}
