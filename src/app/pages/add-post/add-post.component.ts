import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm:FormGroup;
  resData;
  catData;
  constructor(
    private fetchCatSer:CategoryService,
    private fb:FormBuilder,
    private postSer:PostService,
    private router:Router
  ) { }

  ngOnInit(): void {
    // fetchcat
    this.fetchCatSer.getCategory().subscribe(res =>{
      this.resData=res;
      this.catData=this.resData.msg;
      // console.log(this.catData);
      
    })

    // validations
    this.postForm=this.fb.group({
      'ptitle':['',Validators.required],
      'pcat':['',Validators.required],
      'description':['',Validators.required]
    })

  }

  imgPath;

  pimage(event){
    if(event.target.files.length  > 0){
      this.imgPath=event.target.files[0];
      console.log(this.imgPath)
    }
    
  }

  postRes;
  addPost(){
    let formData=this.postForm.getRawValue();
    let fData=new FormData();
    fData.append('ptitle',formData.ptitle);
    fData.append('pcat',formData.pcat);
    fData.append('description',formData.description);
    fData.append('Image',this.imgPath);
    fData.append('postedBy',localStorage.getItem('email'));
    // console.log(fData);
    this.postSer.addPost(fData).subscribe(
      res=>{
        this.postRes=res;
        if(this.postRes.err==0){
          this.router.navigate(['/dashboard/posts']);
        }else{
          alert(this.postRes.msg);
        }
        
      }
    )
    
  }

}
