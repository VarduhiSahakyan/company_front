import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-eiteemployee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee: any;

  constructor(private route: ActivatedRoute,
              private service: EmployeeService) { }

  ngOnInit(): void {
    const {id} = this.route.snapshot.params;
    this.getEmployeeById(id);
  }
  getEmployeeById(id: any){
    this.service.getEmployeeById(id).subscribe(response => {
      this.employee = response;
    })
  }

}
