import { Injectable } from '@angular/core';
import { Bundle } from 'fhir/r4';
import { IPatient } from '../models/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientAdapterService {
  constructor() {}

  fromBundleR4toBasicPatient(r4bundle: Bundle): IPatient[] {
    return [
      {
        id: 1,
        name: 'name',
        surname: 'surname',
        birthdate: new Date().toISOString(),
        gender: 'male',
      },
    ];
  }
}
