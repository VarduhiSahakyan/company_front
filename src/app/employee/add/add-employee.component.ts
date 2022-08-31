import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-addemployee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm: any;
  validMessage: string = "";

  constructor(   private service: EmployeeService,
                 private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  createEmployee(){
    let employeeData = this.employeeForm.value;
    if (this.employeeForm.valid){
      this.validMessage = "Employee saved!";
      this.service.saveEmployee(employeeData).subscribe(
        response => {
          this.employeeForm.reset();
          return response;
        }, error => {
          return (error);
        }
      )
    }else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }

  initializeForm() {
    this.employeeForm = this.formBuilder.group({
      employeeName: ['', Validators.required],
      employeeSurname: ['', Validators.required]
    });
  }

}
