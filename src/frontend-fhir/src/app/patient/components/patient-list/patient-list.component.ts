import { Component } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { IPatient } from '../../models/patient.model';
import { TableRowSelectEvent } from 'primeng/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent {
  patients: Observable<IPatient[]>;
  loading: boolean;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loading = true;
    this.patients = this.patientService.getPatientList().pipe(
      tap({
        next: () => (this.loading = false),
        error: () => (this.loading = false),
      })
    );
  }

  onRowSelect(event: TableRowSelectEvent) {
    const patient = event.data as IPatient;
    if (patient.id) {
      this.router.navigate([patient.id], { relativeTo: this.route });
    }
  }
}
