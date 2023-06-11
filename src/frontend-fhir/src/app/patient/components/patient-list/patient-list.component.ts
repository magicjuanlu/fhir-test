import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { IPatient } from '../../models/patient.model';
import { TableRowSelectEvent } from 'primeng/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  patients: IPatient[] = [];

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.patientService.getPatientList().subscribe((list) => {
      console.log(list);
      this.patients = list;
    });
  }

  onRowSelect(event: TableRowSelectEvent) {
    const patient = event.data as IPatient;
    if (patient.id) {
      this.router.navigate([patient.id], { relativeTo: this.route });
    }
  }
}
