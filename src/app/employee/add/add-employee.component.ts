import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../employee";

@Component({
  selector: 'app-addemployee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm: any;
  validMessage: string = "";

  constructor(   private service: EmployeeService,
                 private formBuilder: FormBuilder,
                 public dialogRef: MatDialogRef<AddEmployeeComponent>,
                 @Inject(MAT_DIALOG_DATA) public data: Employee
  ) { }



  ngOnInit(): void {
    this.initializeForm();
  }

  createEmployee(){
    let employeeData = this.employeeForm.value;
    if (this.employeeForm.valid){
      this.validMessage = "Employee saved!";
      this.service.saveEmployee(employeeData).subscribe(
        response => {
          return response;
        }, error => {
          return (error);
        }
      )
    }else {
      this.validMessage = "Please fill out the form before submitting!";
    }
    console.log(employeeData);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  initializeForm() {
    this.employeeForm = this.formBuilder.group({
      employeeName: ['', Validators.required],
      employeeSurname: ['', Validators.required]
    });
  }

}
