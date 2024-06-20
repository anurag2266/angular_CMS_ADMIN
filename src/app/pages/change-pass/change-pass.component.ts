import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CpassService } from 'src/app/service/cpass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  changePass:FormGroup;
  resData;
  constructor(
    private fb:FormBuilder,
    private cpassSer:CpassService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.validate();
  }

  validate(){
    this.changePass=this.fb.group({
      'opass':['',Validators.required],
      'npass':['',Validators.required],
      'cpass':['',Validators.required]
    })
  }

  changePassword(){
    let fData=this.changePass.getRawValue();
    // console.log(fData);
    if(fData.npass===fData.cpass){
      this.cpassSer.changeMyPassword({'opass':fData.opass,'npass':fData.npass,'email':localStorage.getItem('email')}).subscribe(
        res =>{
          this.resData=res;
          if(this.resData.err==0){
            this.router.navigate(['dashboard'])
          }else{
            alert(this.resData.msg);
          }
          
        }
      )
    }else{
      alert('Please Choose New And Confirm Same Password')
    }
    
  }

}
