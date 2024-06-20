import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../url';
@Injectable({
  providedIn: 'root'
})
export class CpassService {

  constructor(
    private http:HttpClient
  ) { }


    changeMyPassword(data){
      return this.http.post(`${url}changepass`,data)
    }



    // fetch contacts
    getContacts(){
      return this.http.get(`${url}getcontact`)
    }

}
