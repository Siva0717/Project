import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  standalone:true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private router:Router){}
  sub1(){
    this.router.navigate(['Register'])
  }
  sub2(){
    this.router.navigate(['login'])
  }

}
