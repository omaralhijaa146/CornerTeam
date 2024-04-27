import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit{

  formBuilder:FormBuilder;
  forms?:FormGroup;
  constructor() {
    this.formBuilder=new FormBuilder();
  }
  getQuestions():FormArray{
    return this.forms?.get('questions') as FormArray;
  }
  // addAnswers(index:number):FormArray{
  //   return this.getQuestions().controls
  // }
  ngOnInit():void {
    this.forms = this.formBuilder.group({});
    // this.addNewQuestion()
  }
}
