import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postname;
  resdata;

  constructor(
    private postSer:PostService
  ) { }

  ngOnInit(): void {
    this.postSer.getPosts().subscribe(res =>{
      this.resdata=res;
      if(this.resdata.err==0){
        this.postname=this.resdata.msg;
        console.log(this.postname);
      }
      
    })
  }
  delpost(a){
    this.postSer.delpost(a).subscribe(res=>{
      console.log(res);
      
    })
  }

}
