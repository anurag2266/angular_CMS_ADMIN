import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../url';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http:HttpClient
  ) { }


  addPost(data){
    return this.http.post(`${url}addpost`,data);
  }
  getPosts(){
    return this.http.get(`${url}getposts`)
  }
  delpost(a){
    return this.http.get(`${url}delcat/${a}`);
  }

}
