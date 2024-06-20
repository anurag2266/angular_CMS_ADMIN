import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedInUser;
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loggedInUser=localStorage.getItem('email');
  }

  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['/'])
  }

}
