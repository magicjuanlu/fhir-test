import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { IPatient } from '../../models/patient.model';
import { TableRowSelectEvent } from 'primeng/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent {
  patients: Observable<IPatient[]>;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.patients = this.patientService.getPatientList();
  }

  onRowSelect(event: TableRowSelectEvent) {
    const patient = event.data as IPatient;
    if (patient.id) {
      this.router.navigate([patient.id], { relativeTo: this.route });
    }
  }
}
