import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Role } from '../../models/role-interface';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
})
export class RolesComponent implements OnInit {
  rolesList: Role[] = [];

  rolesService = inject(RolesService);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(): void {
    this.rolesService.getRoles().subscribe((data) => {
      this.rolesList = data;
    });
  }
}
