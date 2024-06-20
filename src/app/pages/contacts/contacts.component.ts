import { Component, OnInit } from '@angular/core';
import { CpassService } from 'src/app/service/cpass.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactDetails;
  contactMsg;
  constructor(
    private contactSer:CpassService
  ) { }

  ngOnInit(): void {
    this.contactSer.getContacts().subscribe(res=>{
      this.contactMsg=res;
      if(this.contactMsg.err==0){
        this.contactDetails=this.contactMsg.msg;
      }
    })
  }

}
