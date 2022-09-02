import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "./employee.service";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Employee} from "./employee";
import {AddEmployeeComponent} from "./add/add-employee.component";
import {MatDialog} from '@angular/material/dialog';
import {EditEmployeeComponent} from "./edit/edit-employee.component";


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
    this.displayedColumns = ['employeeName', 'employeeSurname', 'actions'];
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  openDialogForAdd() {
    const dialogRef = this.dialog.open(AddEmployeeComponent,{
      width: '250px',
      data: {employeeName: this.employeeName, employeeSurname: this.employeeSurname},

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogForUpdate() {
    const dialogRef = this.dialog.open(EditEmployeeComponent,{
      width: '250px' ,
      data: {employeeName: this.employeeName, employeeSurname: this.employeeSurname},

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
        console.log(e);
      }
    });
  }
}

