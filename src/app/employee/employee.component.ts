import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "./employee.service";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Employee} from "./employee";
import {AddEmployeeComponent} from "./add/add-employee.component";
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeName: string = '';
  employeeSurname: string = '';

  employees: any;
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<Employee>();

  constructor(
    public dialog: MatDialog,
    private addEmployee: AddEmployeeComponent,
    private route: ActivatedRoute,
    private service: EmployeeService
  ) {
    this.displayedColumns = ['employeeName', 'employeeSurname'];
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddEmployeeComponent,{
      width: '250px',
      data: {employeeName: this.employeeName, employeeSurname: this.employeeSurname}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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

