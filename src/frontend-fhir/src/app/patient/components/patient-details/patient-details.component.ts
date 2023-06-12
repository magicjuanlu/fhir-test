import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPatient } from '../../models/patient.model';
import { PatientService } from '../../services/patient.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent {
  patient: Observable<IPatient>;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.patient = this.patientService.getPatient(id).pipe(
      tap({
        error: (err) => (this.errorMessage = err.statusText),
      })
    );
  }

  navigateToList() {
    this.router.navigate(['patient']);
  }
}
