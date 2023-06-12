import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientRoutingModule } from './patient-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [PatientListComponent, PatientDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    TableModule,
    CardModule,
    ButtonModule,
    ProgressBarModule,
  ],
  exports: [PatientRoutingModule],
})
export class PatientModule {}
