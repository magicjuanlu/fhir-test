import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FHIRApiService } from './fhir-api.service';
import { PatientAdapterService } from './patient-adapter.service';
import { IPatient } from '../models/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(
    private fhirApiService: FHIRApiService,
    private patientAdapter: PatientAdapterService
  ) {}

  getPatientList(): Observable<IPatient[]> {
    return this.fhirApiService
      .getBundle()
      .pipe(map((bundle) => this.patientAdapter.fromBundleR4toPatient(bundle)));
  }
}
