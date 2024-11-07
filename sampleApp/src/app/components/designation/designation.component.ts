import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Designation } from '../../models/designation-interface';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss',
})
export class DesignationComponent implements OnInit {
  masterService = inject(MasterService);
  designationList: Designation[] = [];
  loadingStatus: boolean = true;

  ngOnInit(): void {
    this.getAllDesignations();
  }

  getAllDesignations(): void {
    this.masterService.getDesignations().subscribe((data) => {
      this.loadingStatus = false;
      this.designationList = data;
    });
  }
}
