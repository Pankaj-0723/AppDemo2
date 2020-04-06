import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samplecomponent',
  templateUrl: './samplecomponent.component.html',
  styleUrls: ['./samplecomponent.component.css']
})
export class SamplecomponentComponent implements OnInit {
name:any;
isValid:boolean;
EmployeeData=[{name:"Jhon", salary:"1000"},{name:"Steve", salary:"500"}]
  constructor() { }

  ngOnInit() {
    this.name="Welcome to Angular Learning Hub !!!";
    this.isValid=true;
  }

  onSubmit(name){
    this.name="button clicked!!!";
  }

  onChange(employeeObj){
    // debugger;
    employeeObj.salary="100000";
  }

}
