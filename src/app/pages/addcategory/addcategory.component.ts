import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  catForm:FormGroup;

  // for image
  imgPath;

  constructor(
    private fb:FormBuilder,
    private catSer:CategoryService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.validate();
  }

  validate(){
    this.catForm=this.fb.group({
      'cname':['',Validators.required],
      'cabout':['',Validators.required]
    })
  }

  cimage(event){
    if(event.target.files.length  > 0){
      this.imgPath=event.target.files[0];
      console.log(this.imgPath)
    }
    
  }

  success;

  addCat(){
    let formData=this.catForm.getRawValue();
    let fData=new FormData();
    fData.append('cname',formData.cname);
    fData.append('cabout',formData.cabout);
    fData.append('Image',this.imgPath);
    // console.log(formData)
    this.catSer.addCategory(fData)
    .subscribe(res => {
      this.success=res;
      if(this.success.err===0){
        this.router.navigate(['dashboard/category']);
      }else{
        Swal.fire('Oops...', this.success.msg, 'error');
      }
      
    })
  }

}
