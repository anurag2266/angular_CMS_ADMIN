import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
//import { Console } from 'console';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  resData;
  catData;
  constructor(
    private fetchCatSer:CategoryService
  ) { }

  ngOnInit(): void {
    this.fetchCatSer.getCategory().subscribe(res =>{
      this.resData=res;
      this.catData=this.resData.msg;
      console.log(this.catData);
      
    })
  }


  delCat(a){
    this.fetchCatSer.delCat(a).subscribe(res =>
      console.log(res)

      )
  }

}
