import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {url} from '../url';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategory(data){
    return this.http.post(`${url}addcategory`,data)
  }

  getCategory(){
    return this.http.get(`${url}getcategory`)
  }


  delCat(c){
    return this.http.get(`${url}delcat/${c}`);
  }

}
