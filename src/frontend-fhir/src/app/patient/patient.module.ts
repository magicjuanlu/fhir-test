import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientRoutingModule } from './patient-routing.module';

@NgModule({
  declarations: [PatientListComponent, PatientDetailsComponent],
  imports: [CommonModule],
  exports: [PatientRoutingModule],
})
export class PatientModule {}
