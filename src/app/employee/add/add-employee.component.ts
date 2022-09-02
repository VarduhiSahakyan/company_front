import {Component, OnInit} from '@angular/core';
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
  employeeName: string = "";

  constructor(   private service: EmployeeService,
                 private formBuilder: FormBuilder
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
          this.employeeForm.reset();
          return response;
        }, error => {
          return (error);
        }
      )
    }else {
      this.validMessage = "Please fill out the form before submitting!";
    }
    // todo delete log
    console.log(employeeData);
  }

  //todo
  getErrorMessage() {
    if (this.employeeForm.employeeName.hasError('required')) {
      return 'You must enter a value';
    }
    return this.employeeForm.employeeName.hasError('email') ? 'Not a valid email' : '';
  }

  initializeForm() {
    this.employeeForm = this.formBuilder.group({
      employeeName: ['', Validators.required],
      employeeSurname: ['', Validators.required]
    });
  }
}
