import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientRoutingModule } from './patient-routing.module';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [PatientListComponent, PatientDetailsComponent],
  imports: [CommonModule, FormsModule, SkeletonModule, TableModule],
  exports: [PatientRoutingModule],
})
export class PatientModule {}
