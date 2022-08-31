import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "./employee.service";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Employee} from "./employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employees: any;
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<Employee>();

  constructor(private route: ActivatedRoute,
              private service: EmployeeService
  ) {
    this.displayedColumns = ['employeeName', 'employeeSurname'];
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.service.getAllEmployees().subscribe(e => {
      if (e) {
        this.dataSource = new MatTableDataSource<Employee>(e);
        this.employees = e;
      }
    });
  }
}
