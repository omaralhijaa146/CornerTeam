import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Response} from "../models/Response";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  response?:Response;
  constructor(public httpClient:HttpClient) { }

  callApi(file:File):void{
    const formData=new FormData();
    formData.append('pdf_file',file);
    this.httpClient.post('https://8000-alghzzawi-cornerbe-v408kpvw0ec.ws-us110.gitpod.io/LLM/get1/',formData).subscribe({
      error: (err) => {
        console.log(err)
      },
      next: (res): void => {
        this.response = res as Response;
        this.webService().subscribe({
          next: (res): void => {
            if(this.response?.progress=="100%")
            {
              console.log("Success!");
              console.log(res);
            }
            else{
              console.log("call again: ", this.response?.progress)
              //wait
              this.webService();
            }

          },
          error: (err) => {
            console.log("here");
            console.log(err);
            this.webService();
          }
        });
        }
    });
  }

  webService(){
    console.log('site:', this.response?.url)
    const headers = new HttpHeaders().set('x-api-key', "1860715415255729c7870c73a21801027276f8758ed282a0f99a03e18bfc2f48");
    headers.set('Access-Control-Allow-Origin','*');
   return this.httpClient.get(this.response?.url!, {
      headers
    });
  }

}
