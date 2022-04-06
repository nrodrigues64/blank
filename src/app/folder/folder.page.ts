import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public employee: any;
  public employeeFirstName: any;
  public employeeLastName: any;
  constructor(private activatedRoute: ActivatedRoute, private employee_db: EmployeeService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  addEmployee() {
    this.employee_db.addEmployee(this.employeeFirstName, this.employeeLastName);
    console.log("add employee");
  }

}
