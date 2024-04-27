import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-explainer',
  templateUrl: './explainer.component.html',
  styleUrls: ['./explainer.component.css']
})
export class ExplainerComponent {

  formControl=new FormControl();
  constructor(private userService:UserService) {
  }
  setData(event:any):void{
    const formData=event.target.files[0];
    console.log(formData);
    this.userService.callApi(formData);
  }


}
