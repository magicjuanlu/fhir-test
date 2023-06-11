import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { IPatient } from '../../models/patient.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  patients: IPatient[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatientList().subscribe((list) => {
      console.log(list);
      this.patients = list;
    });
  }
}
