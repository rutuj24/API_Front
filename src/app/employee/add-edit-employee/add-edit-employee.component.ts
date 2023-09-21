import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  constructor(private service: ApiserviceService) { }
  @Input() emp: any;
  EmployeeID = "";
  EmployeeName = "";
  Department = "";
  EmailId = "";
  DOJ = "";


  ngOnInit(): void {
    this.loadEmployeeList();
  }

  loadEmployeeList() {
    this.EmployeeID = this.emp.EmployeeID;
    this.EmployeeName = this.emp.EmployeeName;
    this.Department = this.emp.Department;
    this.EmailId = this.emp.EmailId;
    this.DOJ = this.emp.DOJ;
  }

  addEmployee() {
    var val = {
      EmployeeId: this.EmployeeID,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      EmailId: this.EmailId,
      DOJ: this.DOJ,
    };

    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());
    });  
  }

  updateEmployee() {
    var val = {
      EmployeeID: this.EmployeeID,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      EmailId : this.EmailId,
      DOJ: this.DOJ,
    };

    this.service.updateEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }
}