import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../employee.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-eiteemployee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id: any;
  employeeForm: any;
  employee: any;
  validMessage: string = "";

  constructor(private route: ActivatedRoute,
              private service: EmployeeService,
              private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get("id");
    // const {id} = this.route.snapshot.params;
    // const {surname} = this.route.snapshot.params;
    this.getEmployeeById(this.id);
    this.initializeForm();
    // this.getEmployeeBySurname(surname);
  }

  updateEmployee(){
    this.id = this.route.snapshot.paramMap.get("id");
    let employeeData = this.employeeForm.value;
    this.service.updateEmployee(employeeData).subscribe(response =>{
       this.validMessage = response;
    })
  }

  getEmployeeById(id: any){
    this.service.getEmployeeById(id).subscribe(response => {
      this.employee = response;
      console.log(response)
    })
  }
  getEmployeeBySurname(surname: any){
    this.service.getEmployeeBySurname(surname).subscribe(response => {
      this.employee = response;
    })
  }

  initializeForm() {
    this.employeeForm = this.formBuilder.group({
      employeeName: ['', Validators.required],
      employeeSurname: ['', Validators.required]
    });
  }

}
