import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/api/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resData;
  myForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private lser:LoginService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.validate();
    // this.router.navigate(['dashboard']);
  }

  // For Submit LoginDetails

  loginData(){
    let formData=this.myForm.getRawValue();
    // console.log(formData)
    this.lser.adminLogin(formData)
    .subscribe(res =>{
      this.resData=res;
      if(this.resData.err==0){
        // console.log('done'+this.resData.msg)
        localStorage.setItem('email',this.resData.id);
        this.router.navigate(['dashboard']);
      }else{
        Swal.fire('Oops...', 'Something went wrong!', 'error');
      }
    })
  } 

  // For Validations
  validate(){
    this.myForm=this.fb.group(
      {
        'email':['',Validators.required],
        'password':['',Validators.required]
      }
    )
  }

}
