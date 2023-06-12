import { Injectable } from '@angular/core';
import { Bundle, Patient } from 'fhir/r4';
import { IPatient } from '../models/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientAdapterService {
  constructor() {}

  fromBundleR4toPatient(r4bundle: Bundle): IPatient[] {
    if (!r4bundle.entry) return [];
    let patients: IPatient[] = [];
    r4bundle.entry.forEach((entry) => {
      if (entry.resource?.resourceType === 'Patient') {
        patients.push(this.mapR4PatientToPatient(entry.resource));
      }
    });
    return patients;
  }

  mapR4PatientToPatient(r4Patient: Patient): IPatient {
    const humanName = r4Patient.name?.[0];
    const address = r4Patient.address?.[0];
    const contact = r4Patient.telecom?.[0];
    return {
      id: r4Patient.id,
      name: humanName?.given?.toString(),
      surname: humanName?.family,
      birthdate: r4Patient.birthDate,
      gender: r4Patient.gender,
      street: address?.line?.toString(),
      city: address?.city,
      postalCode: address?.postalCode,
      district: address?.district,
      state: address?.state,
      country: address?.country,
      contact: contact ? `${contact?.value} (${contact?.system})` : undefined,
    };
  }
}
